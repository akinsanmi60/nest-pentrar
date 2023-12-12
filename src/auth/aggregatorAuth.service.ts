import {
  BadRequestException,
  Injectable,
  UseInterceptors,
} from "@nestjs/common";
import {
  LoginDto,
  AggregatorRegisterDto,
  VerifyEmailDto,
  ResetPasswordDto,
  ForgotPasswordAggregatorDto,
} from "./dto/userAuth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Aggregator } from "../../prisma/generated/client";
import { PasswordService } from "./password.service";
import { MailService } from "../mail/mail.service";
import * as crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { ResponseInterceptor } from "src/responeFilter/respone.service";
import { AuthResolver } from "./authFinder.service";

@UseInterceptors(ResponseInterceptor)
@Injectable()
export class AggregatorAuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly mailService: MailService,
    private prisma: PrismaService,
    private authResolver: AuthResolver,
  ) {}

  async login(dto: LoginDto) {
    const { email, password } = dto;

    const foundAggregator = await this.prisma.aggregator.findUnique({
      where: {
        email,
      },
    });

    if (!foundAggregator) {
      throw new BadRequestException("Wrong email credential");
    }

    const isMatch = this.passwordService.validatePassword(
      password,
      foundAggregator.password,
    );

    if (!isMatch) {
      throw new BadRequestException("Wrong password inputed");
    }

    const payload = {
      id: foundAggregator.id,
      first_name: foundAggregator.first_name,
      last_name: foundAggregator.last_name,
      email: foundAggregator.email,
      phone_number: foundAggregator.phone_number,
      pentrar_aggregator_id: foundAggregator.pentrar_aggregator_id,
      role: foundAggregator.role,
      last_active: foundAggregator.last_active,
      is_active: foundAggregator.is_active,
      isEmail_verified: foundAggregator.isEmail_verified,
    } as Aggregator;

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

    const emailTaken = await this.authResolver.findOneAggregatorByEmail(email);

    const isEmailTaken =
      (await this.authResolver.findOneUserByEmail(email)) ||
      (await this.authResolver.findOneFarmerByEmail(email)) ||
      emailTaken;

    if (isEmailTaken) {
      throw new BadRequestException("Email is already taken");
    }

    const phoneNumberTaken =
      await this.authResolver.findOneAggregatorByPhone(phone_number);

    const isPhoneNumberTaken =
      (await this.authResolver.findOneUserByPhone(phone_number)) ||
      (await this.authResolver.findOneFarmerByPhone(phone_number)) ||
      phoneNumberTaken;

    if (isPhoneNumberTaken) {
      throw new BadRequestException("Phone number is already taken");
    }

    const code = crypto.randomInt(100000, 999999);

    const hashedPassword = await this.passwordService.hashPassword(password);

    const newAggregator = await this.prisma.aggregator.create({
      data: {
        id: uuidv4(),
        email,
        created_at: new Date(),
        password: hashedPassword as unknown as string,
        first_name,
        last_name,
        pentrar_aggregator_id: uuidv4(),
        phone_number,
        isEmail_verified: false,
        status: "Pending",
        created_by_id: created_by_id ? created_by_id : null,
        verification_code: code.toString(),
        role: "Aggregator",
      },
    });

    if (newAggregator) {
      await this.mailService.userSignUp({
        to: email,
        data: {
          name: first_name,
          code: code?.toString(),
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

    const foundAggregator = await this.prisma.aggregator.findUnique({
      where: { verification_code: code },
    });

    if (!foundAggregator) {
      throw new BadRequestException("Invalid code");
    }

    if (foundAggregator.isEmail_verified) {
      throw new BadRequestException("Email already verified");
    }

    const updatedAggregator = await this.prisma.aggregator.update({
      where: { verification_code: code },
      data: {
        isEmail_verified: true,
        verification_code: null,
        status: "Active",
        is_active: true,
      },
    });

    if (!updatedAggregator) {
      throw new BadRequestException("Failed to update aggregator");
    }

    if (updatedAggregator.isEmail_verified) {
      return {
        message: "Email verification success",
      };
    }
  }

  async forgotPassword(dto: ForgotPasswordAggregatorDto) {
    const { email } = dto;
    const codeGenerated = crypto.randomInt(100000, 999999);
    const foundUser = await this.prisma.aggregator.update({
      where: { email },
      data: {
        password_resetCode: await this.passwordService.hashPassword(
          codeGenerated.toString(),
        ),
      },
    });

    if (!foundUser) {
      throw new BadRequestException("Invalid email");
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

  async resetPassword(dto: ResetPasswordDto) {
    const { code, new_password } = dto;

    const foundUser = await this.prisma.aggregator.findUnique({
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
        await this.prisma.aggregator.update({
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
