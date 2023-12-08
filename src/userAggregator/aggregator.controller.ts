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
import { AggregratorService } from "./aggregator.service";
import { ApiBody, ApiParam, ApiQuery, ApiTags } from "@nestjs/swagger";
import { GetAllAggregatorDto, UpdateAggregatorDto } from "./dto/aggregator.dto";

@ApiTags("Aggregator")
@Controller("aggregator")
export class AggregatorController {
  constructor(private readonly aggregatorService: AggregratorService) {}

  @Get("allAggregators")
  @ApiQuery({ type: GetAllAggregatorDto, required: false })
  async getAllAggregators(@Query() dto) {
    return await this.aggregatorService.getAllAggregators(dto);
  }

  //hello

  @Post(":id/activate-aggregator")
  @ApiParam({ name: "id", type: "string" })
  async activateAggregator(@Param("id") id: string) {
    return await this.aggregatorService.activateAggregator(id);
  }

  @Post(":id/deactivate-aggregator")
  @ApiParam({ name: "id", type: "string" })
  async deactivateAggregator(@Param("id") id) {
    console.log(id);
    return await this.aggregatorService.deactivateAggregator(id);
  }

  @Put(":id/update-aggregator")
  @ApiParam({ name: "id" })
  @ApiBody({ type: UpdateAggregatorDto })
  async updateAggregator(@Param("id") id, @Body() dto) {
    return await this.aggregatorService.updateAggregator(id, dto);
  }

  @Delete(":id/delete-aggregator")
  @ApiParam({ name: "id", type: String })
  async deleteAggregator(@Param("id") id) {
    return await this.aggregatorService.deleteAggregator(id);
  }
}
