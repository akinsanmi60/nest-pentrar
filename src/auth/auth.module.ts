import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./userAuth.service";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtModule } from "@nestjs/jwt";
import { PasswordService } from "./password.service";
import { JwtStrategy } from "./auth.jwt.strategy";
import { MailModule } from "../mail/mail.module";
import { ConfigService } from "@nestjs/config";
import { SecurityConfig } from "src/common/configs/config.interface";
import { PassportModule } from "@nestjs/passport";
import { AuthResolver } from "./authFinder.service";
import { AggregatorAuthService } from "./aggregatorAuth.service";
import { FarmerAuthService } from "./farmer.service";

@Module({
  imports: [
    MailModule,
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const securityConfig = configService.get<SecurityConfig>("security");
        return {
          secret: configService.get<string>("JWT_ACCESS_SECRET"),
          signOptions: {
            expiresIn: securityConfig.expiresIn,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    JwtStrategy,
    PasswordService,
    AuthResolver,
    AggregatorAuthService,
    FarmerAuthService,
  ],
})
export class AuthModule {}
