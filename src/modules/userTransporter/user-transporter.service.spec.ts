import { Test, TestingModule } from "@nestjs/testing";
import { UserTransporterService } from "./user-transporter.service";

describe("UserTransporterService", () => {
  let service: UserTransporterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTransporterService],
    }).compile();

    service = module.get<UserTransporterService>(UserTransporterService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
