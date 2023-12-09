import { Test, TestingModule } from "@nestjs/testing";
import { UserTransporterController } from "./user-transporter.controller";
import { UserTransporterService } from "./user-transporter.service";

describe("UserTransporterController", () => {
  let controller: UserTransporterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTransporterController],
      providers: [UserTransporterService],
    }).compile();

    controller = module.get<UserTransporterController>(
      UserTransporterController,
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
