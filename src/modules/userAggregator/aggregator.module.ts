import { Module } from "@nestjs/common";
import { AggregatorController } from "./aggregator.controller";
import { AggregratorService } from "./aggregator.service";
import { MailModule } from "../../mail/mail.module";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [MailModule, ConfigModule],
  controllers: [AggregatorController],
  providers: [AggregratorService, PrismaService],
})
export class AggregatorModule {}
