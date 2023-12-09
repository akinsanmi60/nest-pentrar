import { Controller } from "@nestjs/common";
import { UserTransporterService } from "./user-transporter.service";

@Controller("user-transporter")
export class UserTransporterController {
  constructor(
    private readonly userTransporterService: UserTransporterService,
  ) {}
}
