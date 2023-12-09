import { Module } from "@nestjs/common";
import { FarmProduceService } from "./farm-produce.service";
import { FarmProduceController } from "./farm-produce.controller";

@Module({
  controllers: [FarmProduceController],
  providers: [FarmProduceService],
})
export class FarmProduceModule {}
