import { Test, TestingModule } from "@nestjs/testing";
import { FarmProduceService } from "./farm-produce.service";

describe("FarmProduceService", () => {
  let service: FarmProduceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmProduceService],
    }).compile();

    service = module.get<FarmProduceService>(FarmProduceService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
