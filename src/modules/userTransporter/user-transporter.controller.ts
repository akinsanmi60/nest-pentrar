import { Controller } from "@nestjs/common";
import { UserTransporterService } from "./user-transporter.service";
import { ApiBearerAuth } from "@nestjs/swagger";

@ApiBearerAuth()
@Controller("user-transporter")
export class UserTransporterController {
  constructor(
    private readonly userTransporterService: UserTransporterService,
  ) {}
}
