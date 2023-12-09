import { Module } from "@nestjs/common";
import { UserTransporterService } from "./user-transporter.service";
import { UserTransporterController } from "./user-transporter.controller";

@Module({
  controllers: [UserTransporterController],
  providers: [UserTransporterService],
})
export class UserTransporterModule {}
