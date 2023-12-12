import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import { FarmerService } from "./farmer.service";
import {
  GetAllFarmerDto,
  GetAllFarmerResponse,
  UpdateFarmerDto,
  getFarmerByIdDtoResponse,
} from "./dto/farmer.dto";
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwtAuth.guard";
import { RolesGuard } from "src/roles/roles.guard";
import { Role } from "src/roles/role.enum";
import { Roles } from "src/roles/roles.decorator";

@ApiBearerAuth()
@ApiTags("Farmer")
@Controller("farmer")
export class FarmerController {
  constructor(private readonly farmerService: FarmerService) {}

  @Get("allfarmers")
  @ApiQuery({ type: GetAllFarmerDto, required: false })
  @ApiResponse({ type: GetAllFarmerResponse, isArray: true })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin)
  getAllFarmers(@Query() dto) {
    return this.farmerService.getAllFarmers(dto);
  }

  @Post(":id/activate-farmer")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({ type: getFarmerByIdDtoResponse })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin)
  activateFarmer(@Param("id") id: string) {
    return this.farmerService.activateFarmer(id);
  }

  @Post(":id/deactivate-farmer")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({ type: getFarmerByIdDtoResponse })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin)
  deactivateFarmer(@Param("id") id: string) {
    return this.farmerService.deactivateFarmer(id);
  }

  @Put(":id/update-farmer")
  @ApiBody({ type: UpdateFarmerDto })
  @ApiResponse({ type: getFarmerByIdDtoResponse })
  @ApiParam({ name: "id" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin, Role.Farmer)
  updateFarmer(@Param("id") id: string, @Body() dto) {
    return this.farmerService.updateFarmer(id, dto);
  }

  @Delete(":id/delete-farmer")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({ type: getFarmerByIdDtoResponse })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin)
  deleteFarmer(@Param("id") id: string) {
    return this.farmerService.deleteFarmer(id);
  }

  @Get(":id/individual-farmer")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({ type: getFarmerByIdDtoResponse })
  getFarmerById(@Param("id") id: string) {
    return this.farmerService.getFarmerById(id);
  }
}
