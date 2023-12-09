import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUUID, Length } from "class-validator";
import { getFarmerInfoResponse } from "../../../modules/userFarmer/dto/farmer.dto";
import { TransporterInfoDto } from "../../../modules/userTransporter/dto/transporter.dto";

export class GetAllAggregatorDto {
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
  pentrar_aggregator_id: string;

  @ApiProperty({ example: "08-12-2023", required: false })
  created_at: string;

  @ApiProperty({
    example: "Pending",
    required: false,
    enum: ["Active", "Inactive", "Invited", "Pending"],
  })
  status: string;

  @ApiProperty({ required: false })
  @Length(11, 11, {
    message: "Phone number must be at must be 11 characters long.",
  })
  phone_number: string;
}

export class ActivateAggregatorDto {
  @ApiProperty({
    example: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    required: true,
  })
  @IsUUID("4", { message: "ID must be a valid UUID." })
  id: string;
}
export class UpdateAggregatorDto {
  @ApiProperty()
  @Length(11, 11, {
    message: "Phone number must be at must be 11 characters long.",
  })
  phone_number: string;
}

export class AggregatorResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  is_active: boolean;

  @ApiProperty()
  email: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  last_active: string;

  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  pentrar_aggregator_id: string;

  @ApiProperty()
  created_by_id: string;

  @ApiProperty({ type: () => getFarmerInfoResponse, isArray: true })
  farmers: getFarmerInfoResponse[];

  @ApiProperty({ type: () => TransporterInfoDto, isArray: true })
  transporters: TransporterInfoDto[];

  @ApiProperty()
  status: string;

  @ApiProperty()
  role: string;
}

export class AggregatorInfoDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  is_active: boolean;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  pentrar_aggregator_id: string;

  @ApiProperty({ type: () => getFarmerInfoResponse, isArray: true })
  farmers: getFarmerInfoResponse[];

  @ApiProperty({ type: () => TransporterInfoDto, isArray: true })
  transporters: TransporterInfoDto[];
}

class AggregatorDataResponse {
  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;

  @ApiProperty()
  current_page: number;

  @ApiProperty()
  page_size: number;

  @ApiProperty({
    type: () => AggregatorResponseDto,
    isArray: true,
  })
  aggregators_list: AggregatorResponseDto[];
}

export class GetAllAggregatorResponse {
  @ApiProperty()
  message: string;
  @ApiProperty()
  data: AggregatorDataResponse;
}
