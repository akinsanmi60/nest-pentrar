import { Test, TestingModule } from "@nestjs/testing";
import { AggregratorService } from "./aggregator.service";

describe("AggregatorService", () => {
  let service: AggregratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AggregratorService],
    }).compile();

    service = module.get<AggregratorService>(AggregratorService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
