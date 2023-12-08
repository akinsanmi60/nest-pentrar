import {
  BadRequestException,
  Injectable,
  UseInterceptors,
} from "@nestjs/common";
import {
  ForgotPasswordDto,
  LoginDto,
  ResetPasswordDto,
  UserRegisterDto,
  VerifyEmailDto,
} from "./dto/userAuth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client";
import { PasswordService } from "./password.service";
import { MailService } from "../mail/mail.service";
import { ResponseInterceptor } from "../responeFilter/respone.service";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import { AuthResolver } from "./authFinder.service";

@UseInterceptors(ResponseInterceptor)
@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly mailService: MailService,
    private prisma: PrismaService,
    private authResolver: AuthResolver,
  ) {}

  async login(dto: LoginDto) {
    const { email, password } = dto;

    const foundUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!foundUser) {
      throw new BadRequestException("Wrong email credential");
    }

    const isMatch = this.passwordService.validatePassword(
      password,
      foundUser.password,
    );

    if (!isMatch) {
      throw new BadRequestException("Wrong password inputed");
    }

    const payload = {
      id: foundUser.id,
      first_name: foundUser.first_name,
      last_name: foundUser.last_name,
      email: foundUser.email,
      phone_number: foundUser.phone_number,
      role: foundUser.role,
      last_active: foundUser.last_active,
      pentrar_user_id: foundUser.pentrar_user_id,
      is_active: foundUser.is_active,
      status: foundUser.status,
      isEmail_verified: foundUser.isEmail_verified,
    } as User;
    const allToken = this.passwordService.generateTokens(payload);

    return {
      message: "You have login successfully",
      data: {
        ...allToken,
      },
    };
  }

  async register(dto: UserRegisterDto) {
    const { email, password, first_name, last_name, phone_number, role } = dto;

    const emailTaken = await this.authResolver.findOneUserByEmail(email);

    const isEmailTaken =
      (await this.authResolver.findOneAggregatorByEmail(email)) ||
      (await this.authResolver.findOneFarmerByEmail(email)) ||
      emailTaken;

    if (isEmailTaken) {
      throw new BadRequestException("Email is already taken");
    }

    const phoneNumberTaken =
      await this.authResolver.findOneUserByPhone(phone_number);

    const isPhoneNumberTaken =
      (await this.authResolver.findOneAggregatorByPhone(phone_number)) ||
      (await this.authResolver.findOneFarmerByPhone(phone_number)) ||
      phoneNumberTaken;

    if (isPhoneNumberTaken) {
      throw new BadRequestException("Phone number is already taken");
    }
    const code = crypto.randomInt(100000, 999999);

    const hashedPassword = this.passwordService.hashPassword(password);

    const newUser = await this.prisma.user.create({
      data: {
        id: uuidv4(),
        email,
        password: hashedPassword as unknown as string,
        first_name,
        last_name,
        pentrar_user_id: uuidv4(),
        phone_number,
        role,
        status: "Pending",
        isEmail_verified: false,
        verification_code: code.toString(),
      },
    });

    if (newUser) {
      await this.mailService.userSignUp({
        to: email,
        data: {
          name: first_name,
          code: code.toString(),
        },
      });

      return {
        message: `Account with ${email} successfully created. Check email for verification code`,
        data: {
          code: code,
        },
      };
    }
  }

  async verifyAccount(dto: VerifyEmailDto) {
    const { code } = dto;

    const foundUser = await this.prisma.user.findUnique({
      where: { verification_code: code },
    });

    if (!foundUser) {
      throw new BadRequestException("Invalid code");
    }

    if (foundUser.isEmail_verified) {
      throw new BadRequestException("Email already verified");
    }

    const updatedUser = await this.prisma.user.update({
      where: { verification_code: code },
      data: {
        isEmail_verified: true,
        verification_code: null,
        status: "Active",
        is_active: true,
      },
    });

    if (!updatedUser) {
      throw new BadRequestException("Failed to update user");
    }

    if (updatedUser.isEmail_verified) {
      return {
        meassage: "Email verification success",
      };
    }
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const { phone_number } = dto;
    const codeGenerated = crypto.randomInt(100000, 999999);
    const foundUser = await this.prisma.user.update({
      where: { phone_number },
      data: {
        password_resetCode: await this.passwordService.hashPassword(
          codeGenerated.toString(),
        ),
      },
    });

    if (!foundUser) {
      throw new BadRequestException("Invalid phone_number");
    }

    await this.mailService.forgotPassword({
      to: foundUser.email,
      data: {
        name: foundUser.first_name,
        code: codeGenerated.toString(),
      },
    });

    return {
      message: "Verication code sent to your email",
      data: {
        code: codeGenerated,
      },
    };
  }

  //TODO: fix this function
  async resetPassword(dto: ResetPasswordDto) {
    const { code, new_password } = dto;

    const foundUser = await this.prisma.user.findUnique({
      where: { password_resetCode: code },
    });

    if (!foundUser) {
      throw new BadRequestException("Invalid code");
    } else if (foundUser) {
      // check if the code matches
      const isMatch = foundUser.password_resetCode === code;

      if (!isMatch) {
        throw new BadRequestException("Verification code is incorrect");
      }
      // if the match is true, the password will be updated
      if (isMatch) {
        const hashedPassword = this.passwordService.hashPassword(new_password);
        await this.prisma.user.update({
          where: { id: foundUser.id },
          data: {
            password: hashedPassword as unknown as string,
            password_resetCode: "",
          },
        });
        return {
          message: "Your password has been successfully reset",
        };
      }
    }
  }
}
