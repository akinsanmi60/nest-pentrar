import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./userAuth.service";
import {
  AggregatorRegisterDto,
  ForgotPasswordAggregatorDto,
  ForgotPasswordDto,
  LoginDto,
  ResetPasswordDto,
  UserRegisterDto,
  VerifyEmailDto,
} from "./dto/userAuth.dto";
import { AggregatorAuthService } from "./aggregatorAuth.service";
import { FarmerAuthService } from "./farmer.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private aggregatorAuthService: AggregatorAuthService,
    private farmerAuthService: FarmerAuthService,
  ) {}

  @Post("user/login")
  @ApiBody({
    type: LoginDto,
  })
  login(@Body() dto) {
    return this.authService.login(dto);
  }
  @Post("user/register")
  @ApiBody({
    type: UserRegisterDto,
  })
  register(@Body() dto) {
    return this.authService.register(dto);
  }

  @Post("user/verify")
  @ApiBody({
    type: VerifyEmailDto,
  })
  verifyAccount(@Body() dto) {
    return this.authService.verifyAccount(dto);
  }

  @Post("user/forgot-password")
  @ApiBody({
    type: ForgotPasswordDto,
  })
  forgotPassword(@Body() dto) {
    return this.authService.forgotPassword(dto);
  }

  @Post("user/reset-password")
  @ApiBody({
    type: ResetPasswordDto,
  })
  resetPassword(@Body() dto) {
    return this.authService.resetPassword(dto);
  }

  @Post("aggregator/login")
  @ApiBody({
    type: LoginDto,
  })
  aggregatorLogin(@Body() dto) {
    return this.aggregatorAuthService.login(dto);
  }

  @Post("aggregator/register")
  @ApiBody({
    type: AggregatorRegisterDto,
  })
  aggregatorRegister(@Body() dto) {
    return this.aggregatorAuthService.register(dto);
  }

  @Post("aggregator/verify")
  @ApiBody({
    type: VerifyEmailDto,
  })
  aggregatorVerifyAccount(@Body() dto) {
    return this.aggregatorAuthService.verifyAccount(dto);
  }

  @Post("aggregator/forgot-password")
  @ApiBody({
    type: ForgotPasswordAggregatorDto,
  })
  aggregatorForgotPassword(@Body() dto) {
    return this.aggregatorAuthService.forgotPassword(dto);
  }

  @Post("aggregator/reset-password")
  @ApiBody({
    type: ResetPasswordDto,
  })
  aggregatorResetPassword(@Body() dto) {
    return this.aggregatorAuthService.resetPassword(dto);
  }

  @Post("farmer/login")
  @ApiBody({ type: LoginDto })
  farmerLogin(@Body() dto) {
    return this.farmerAuthService.login(dto);
  }

  @Post("farmer/register")
  @ApiBody({ type: AggregatorRegisterDto })
  farmerRegister(@Body() dto) {
    return this.farmerAuthService.register(dto);
  }

  @Post("farmer/verify")
  @ApiBody({ type: VerifyEmailDto })
  farmerVerifyAccount(@Body() dto) {
    return this.farmerAuthService.verifyAccount(dto);
  }

  @Post("farmer/forgot-password")
  @ApiBody({ type: ForgotPasswordDto })
  farmerForgotPassword(@Body() dto) {
    return this.farmerAuthService.forgotPassword(dto);
  }

  @Post("farmer/reset-password")
  @ApiBody({ type: ResetPasswordDto })
  farmerResetPassword(@Body() dto) {
    return this.farmerAuthService.resetPassword(dto);
  }
}
