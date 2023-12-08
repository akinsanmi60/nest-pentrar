import { ApiProperty } from "@nestjs/swagger";
import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  Length,
  MinLength,
} from "class-validator";

export class LoginDto {
  @ApiProperty()
  @IsEmail({}, { message: "Please provide a valid email address." })
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNotEmpty({ message: "Password cannot be empty." })
  @MinLength(8, { message: "Password must be at least 8 characters long." })
  password: string;
}

export class UserRegisterDto {
  @ApiProperty()
  @IsEmail({}, { message: "Please provide a valid email address." })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Password cannot be empty." })
  @MinLength(8, { message: "Password must be at least 8 characters long." })
  password: string;

  @ApiProperty()
  @IsNotEmpty({ message: "First name cannot be empty." })
  @IsAlpha()
  first_name?: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Last name cannot be empty." })
  @IsAlpha()
  last_name?: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Role cannot be empty." })
  @IsAlpha()
  role: string;

  @ApiProperty()
  @Length(11, 11, {
    message: "Phone number must be at must be 11 characters long.",
  })
  phone_number: string;
}

export class VerifyEmailDto {
  @ApiProperty({ example: "873412" })
  @IsNotEmpty({ message: "Code cannot be empty." })
  @Length(6, 6, { message: "Code must be 6 characters" })
  code: string;
}

export class ForgotPasswordDto {
  @ApiProperty({ example: "+2348123456789" })
  @Length(14, 14, {
    message: "Phone number must be at must be 11 characters long.",
  })
  phone_number: string;
}

export class ForgotPasswordAggregatorDto {
  @ApiProperty()
  @IsEmail({}, { message: "Please provide a valid email address." })
  email: string;
}

export class ForgotPasswordPhoneVerifyDto {
  @ApiProperty({ example: "+2347041237645" })
  @Length(14, 14, {
    message: "Phone number must be at must be 11 characters long.",
  })
  phone_number: string;

  @ApiProperty({ example: "239856" })
  @IsNotEmpty({ message: "Code cannot be empty." })
  @Length(6, 6, { message: "Code must be 6 characters" })
  code: string;
}

export class ResetPasswordDto {
  @ApiProperty({ example: "120945" })
  @IsNotEmpty({ message: "Code cannot be empty." })
  @Length(6, 6, { message: "Code must be 6 characters" })
  code: string;

  @ApiProperty({ example: "test1@example" })
  @IsNotEmpty({ message: "Password cannot be empty." })
  @MinLength(6, { message: "Password must be at least 6 characters long." })
  new_password: string;
}

export class AggregatorRegisterDto {
  @ApiProperty()
  @IsEmail({}, { message: "Please provide a valid email address." })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Password cannot be empty." })
  @MinLength(8, { message: "Password must be at least 8 characters long." })
  password: string;

  @ApiProperty()
  @IsNotEmpty({ message: "First name cannot be empty." })
  @IsAlpha()
  first_name?: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Last name cannot be empty." })
  @IsAlpha()
  last_name?: string;

  @ApiProperty()
  @Length(11, 11, {
    message: "Phone number must be at must be 11 characters long.",
  })
  phone_number: string;

  @ApiProperty({ example: "3fa85f64-5717-4562-b3fc-2c963f66afa6" })
  @IsUUID("4", { message: "ID must be a valid UUID." })
  @IsOptional()
  created_by_id: string;
}
