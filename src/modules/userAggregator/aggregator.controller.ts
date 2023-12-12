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
import { AggregratorService } from "./aggregator.service";
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import {
  AggregatorInfoDto,
  GetAllAggregatorDto,
  GetAllAggregatorResponse,
  UpdateAggregatorDto,
} from "./dto/aggregator.dto";
import { RolesGuard } from "../../roles/roles.guard";
import { JwtAuthGuard } from "../../auth/jwtAuth.guard";
import { Roles } from "../../roles/roles.decorator";
import { Role } from "../../roles/role.enum";

@ApiBearerAuth()
@ApiTags("Aggregator")
@Controller("aggregator")
export class AggregatorController {
  constructor(private readonly aggregatorService: AggregratorService) {}

  @Get("allAggregators")
  @ApiQuery({ type: GetAllAggregatorDto, required: false })
  @ApiResponse({
    type: GetAllAggregatorResponse,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin)
  async getAllAggregators(@Query() dto) {
    return await this.aggregatorService.getAllAggregators(dto);
  }

  @Post(":id/activate-aggregator")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: AggregatorInfoDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin)
  async activateAggregator(@Param("id") id: string) {
    return await this.aggregatorService.activateAggregator(id);
  }

  @Post(":id/deactivate-aggregator")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({
    type: AggregatorInfoDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin)
  async deactivateAggregator(@Param("id") id) {
    return await this.aggregatorService.deactivateAggregator(id);
  }

  @Put(":id/update-aggregator")
  @ApiParam({ name: "id" })
  @ApiBody({ type: UpdateAggregatorDto })
  @ApiResponse({
    type: AggregatorInfoDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin, Role.Aggregator)
  async updateAggregator(@Param("id") id, @Body() dto) {
    return await this.aggregatorService.updateAggregator(id, dto);
  }

  @Delete(":id/delete-aggregator")
  @ApiParam({ name: "id", type: String })
  @ApiResponse({
    type: AggregatorInfoDto,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin)
  async deleteAggregator(@Param("id") id) {
    return await this.aggregatorService.deleteAggregator(id);
  }

  @Get(":id/individual-aggregator")
  @ApiParam({ name: "id", type: String })
  @ApiResponse({
    type: AggregatorInfoDto,
  })
  async getAggregatorById(@Param("id") id) {
    return await this.aggregatorService.getAggregatorById(id);
  }
}
