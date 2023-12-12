import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { FarmProduceService } from "./farm-produce.service";
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import {
  AddProduceDto,
  GetAllProduceDto,
  GetAllProduceResponse,
  ProduceDto,
  ProduceUpdateDto,
} from "./dto/farm-produce.dto";

@ApiBearerAuth()
@ApiTags("Produce")
@Controller("produce")
export class FarmProduceController {
  constructor(private readonly farmProduceService: FarmProduceService) {}

  @Post("create-produce")
  @ApiBody({ type: AddProduceDto })
  @ApiResponse({
    type: ProduceDto,
  })
  @ApiParam({ name: "id", type: String })
  async createFarmProduce(@Param("id") id, dto) {
    return await this.farmProduceService.createFarmProduce(dto, id);
  }

  @Get("allProduces")
  @ApiQuery({ type: GetAllProduceDto, required: false })
  @ApiResponse({
    type: GetAllProduceResponse,
  })
  async getAllFarmProduce(@Query() dto) {
    return await this.farmProduceService.getAllFarmProduce(dto);
  }

  @Delete(":id/delete-produce")
  @ApiParam({ name: "id", type: String })
  @ApiResponse({
    type: ProduceDto,
  })
  async deleteProduce(@Param("id") id) {
    return await this.farmProduceService.deleteProduce(id);
  }

  @Put(":id/update-produce")
  @ApiParam({ name: "id", type: String })
  @ApiResponse({
    type: ProduceDto,
  })
  @ApiBody({ type: ProduceUpdateDto })
  async updateProduce(@Param("id") id, dto) {
    return await this.farmProduceService.updateProduce(id, dto);
  }
}
