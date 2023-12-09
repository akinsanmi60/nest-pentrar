import { Module } from "@nestjs/common";
import { FarmProduceService } from "./farm-produce.service";
import { FarmProduceController } from "./farm-produce.controller";
import { MailModule } from "../../mail/mail.module";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  imports: [MailModule],

  controllers: [FarmProduceController],
  providers: [FarmProduceService, PrismaService],
})
export class FarmProduceModule {}
