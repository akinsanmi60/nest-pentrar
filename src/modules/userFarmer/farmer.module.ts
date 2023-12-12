import { Module } from "@nestjs/common";
import { FarmerController } from "./farmer.controller";
import { FarmerService } from "./farmer.service";
import { PrismaService } from "src/prisma/prisma.service";
import { MailModule } from "../../mail/mail.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [MailModule, ConfigModule],
  controllers: [FarmerController],
  providers: [FarmerService, PrismaService],
})
export class FarmerModule {}
