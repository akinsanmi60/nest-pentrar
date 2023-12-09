import { Module } from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CompanyController } from "./company.controller";
import { MailModule } from "../../mail/mail.module";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  imports: [MailModule],

  controllers: [CompanyController],
  providers: [CompanyService, PrismaService],
})
export class CompanyModule {}
