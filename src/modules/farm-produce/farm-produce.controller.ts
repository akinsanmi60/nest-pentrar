import { Controller } from "@nestjs/common";
import { FarmProduceService } from "./farm-produce.service";

@Controller("farm-produce")
export class FarmProduceController {
  constructor(private readonly farmProduceService: FarmProduceService) {}
}
