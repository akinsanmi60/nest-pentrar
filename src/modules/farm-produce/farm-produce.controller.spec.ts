import { Test, TestingModule } from "@nestjs/testing";
import { FarmProduceController } from "./farm-produce.controller";
import { FarmProduceService } from "./farm-produce.service";

describe("FarmProduceController", () => {
  let controller: FarmProduceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmProduceController],
      providers: [FarmProduceService],
    }).compile();

    controller = module.get<FarmProduceController>(FarmProduceController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
