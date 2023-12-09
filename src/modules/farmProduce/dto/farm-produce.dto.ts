import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUUID } from "class-validator";

export class ProduceDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  quantity?: number;

  @ApiProperty()
  unit?: number;

  @ApiProperty()
  farmer_id: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  pentrar_produce_id?: string;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  description?: string;
}
export class AddProduceDto {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  quantity?: number;

  @ApiProperty()
  unit?: number;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  description?: string;
}

export class ProduceUpdateDto {
  @ApiProperty()
  quantity?: number;

  @ApiProperty()
  unit?: number;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  description?: string;
}

export class GetAllProduceDto {
  @ApiProperty({
    example: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    required: false,
  })
  @IsUUID("4", { message: "ID must be a valid UUID." })
  id: string;

  @ApiProperty({ example: 1, required: false })
  @IsNumber()
  page: number;

  @ApiProperty({ example: 10, required: false })
  @IsNumber()
  limit: number;

  @ApiProperty({ example: "pentrar", required: false })
  @IsString()
  search: string;

  @ApiProperty({ example: "pen1234", required: false })
  @IsString()
  pentrar_produce_id: string;

  @ApiProperty({ example: "08-12-2023", required: false })
  created_at: string;

  @ApiProperty({ example: "maize", required: false })
  name: string;
}

class ProduceDataResponse {
  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;

  @ApiProperty()
  current_page: number;

  @ApiProperty()
  page_size: number;

  @ApiProperty({
    type: () => ProduceDto,
    isArray: true,
  })
  produces_list: ProduceDto[];
}

export class GetAllProduceResponse {
  @ApiProperty()
  message: string;
  @ApiProperty()
  data: ProduceDataResponse;
}
