import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UseInterceptors,
} from "@nestjs/common";
import {
  LoginDto,
  AggregatorRegisterDto,
  VerifyEmailDto,
  ForgotPasswordDto,
  ResetPasswordDto,
} from "./dto/userAuth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { PasswordService } from "./password.service";
import { MailService } from "../mail/mail.service";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { ResponseInterceptor } from "src/responeFilter/respone.service";
import { AuthResolver } from "./authFinder.service";
import { Farmer } from "../../prisma/generated/client";

@UseInterceptors(ResponseInterceptor)
@Injectable()
export class FarmerAuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly mailService: MailService,
    private prisma: PrismaService,
    private authResolver: AuthResolver,
  ) {}

  async login(dto: LoginDto) {
    const { email, password } = dto;

    const foundFarmer = await this.prisma.farmer.findUnique({
      where: {
        email,
      },
    });

    if (!foundFarmer) {
      throw new BadRequestException("Wrong email credential");
    }

    const isMatch = this.passwordService.validatePassword(
      password,
      foundFarmer.password,
    );

    if (!isMatch) {
      throw new BadRequestException("Wrong password inputed");
    }

    const payload = {
      id: foundFarmer.id,
      first_name: foundFarmer.first_name,
      last_name: foundFarmer.last_name,
      email: foundFarmer.email,
      phone_number: foundFarmer.phone_number,
      role: foundFarmer.role,
      last_active: foundFarmer.last_active,
      is_active: foundFarmer.is_active,
      isEmail_verified: foundFarmer.isEmail_verified,
    } as Farmer;

    const allToken = this.passwordService.generateTokens(payload);

    return {
      message: "You have login successfully",
      data: {
        ...allToken,
      },
    };
  }

  async register(dto: AggregatorRegisterDto) {
    const {
      email,
      password,
      first_name,
      last_name,
      phone_number,
      created_by_id,
    } = dto;

    const emailTaken = await this.authResolver.findOneFarmerByEmail(email);

    const isEmailTaken =
      (await this.authResolver.findOneUserByEmail(email)) ||
      (await this.authResolver.findOneAggregatorByEmail(email)) ||
      emailTaken;

    if (isEmailTaken) {
      throw new BadRequestException("Email is already taken");
    }

    const phoneNumberTaken =
      await this.authResolver.findOneFarmerByPhone(phone_number);

    const isPhoneNumberTaken =
      (await this.authResolver.findOneUserByPhone(phone_number)) ||
      (await this.authResolver.findOneAggregatorByPhone(phone_number)) ||
      phoneNumberTaken;

    if (isPhoneNumberTaken) {
      throw new BadRequestException("Phone number is already taken");
    }

    const code = crypto.randomInt(100000, 999999);

    const hashedPassword = this.passwordService.hashPassword(password);

    const newFarmer = await this.prisma.farmer.create({
      data: {
        id: uuidv4(),
        email,
        password: hashedPassword as unknown as string,
        first_name,
        last_name,
        pentrar_farmer_id: uuidv4(),
        phone_number,
        isEmail_verified: false,
        status: "Pending",
        created_by_id: created_by_id ? created_by_id : null,
        verification_code: code.toString(),
        role: "Farmer",
      },
    });

    if (newFarmer) {
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

    const foundFarmer = await this.prisma.farmer.findUnique({
      where: { verification_code: code },
    });

    if (!foundFarmer) {
      throw new BadRequestException("Invalid code");
    }

    if (foundFarmer.isEmail_verified) {
      throw new BadRequestException("Email already verified");
    }

    const updatedFarmer = await this.prisma.farmer.update({
      where: { verification_code: code },
      data: {
        isEmail_verified: true,
        verification_code: null,
        status: "Active",
        is_active: true,
      },
    });

    if (!updatedFarmer) {
      throw new BadRequestException("Failed to update user");
    }

    if (updatedFarmer.isEmail_verified) {
      return {
        meassage: "Email verification success",
      };
    }
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const { phone_number } = dto;
    try {
      const codeGenerated = crypto.randomInt(100000, 999999);
      const foundUser = await this.prisma.farmer.update({
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
    } catch (err) {
      throw new InternalServerErrorException("Internal server error");
    }
  }

  async resetPassword(dto: ResetPasswordDto) {
    const { code, new_password } = dto;

    const foundUser = await this.prisma.farmer.findUnique({
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
        await this.prisma.farmer.update({
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
