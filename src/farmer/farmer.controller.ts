import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { FarmerService } from "./farmer.service";
import { GetAllFarmerDto, UpdateFarmerDto } from "./dto/farmer.dto";
import { ApiBody, ApiParam, ApiQuery, ApiTags } from "@nestjs/swagger";

@ApiTags("Farmer")
@Controller("farmer")
export class FarmerController {
  constructor(private readonly farmerService: FarmerService) {}

  @Get("allfarmers")
  @ApiQuery({ type: GetAllFarmerDto, required: false })
  getAllFarmers(@Query() dto) {
    return this.farmerService.getAllFarmers(dto);
  }

  @Post(":id/activate-farmer")
  @ApiParam({ name: "id", type: "string" })
  activateFarmer(@Param("id") id: string) {
    return this.farmerService.activateFarmer(id);
  }

  @Post(":id/deactivate-farmer")
  @ApiParam({ name: "id", type: "string" })
  deactivateFarmer(@Param("id") id: string) {
    return this.farmerService.deactivateFarmer(id);
  }

  @Put(":id/update-farmer")
  @ApiBody({ type: UpdateFarmerDto })
  @ApiParam({ name: "id" })
  updateFarmer(@Param("id") id: string, @Body() dto) {
    return this.farmerService.updateFarmer(id, dto);
  }

  @Delete(":id/delete-farmer")
  @ApiParam({ name: "id", type: "string" })
  deleteFarmer(@Param("id") id: string) {
    return this.farmerService.deleteFarmer(id);
  }
}
