import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUUID, Length } from "class-validator";
import { TransporterInfoDto } from "../../../modules/userTransporter/dto/transporter.dto";

export class GetAllFarmerDto {
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
  pentrar_farmer_id: string;

  @ApiProperty({ example: "08-12-202", required: false })
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

export class ActivateFarmerDto {
  @ApiProperty({
    example: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    required: true,
  })
  @IsUUID("4", { message: "ID must be a valid UUID." })
  id: string;
}
export class UpdateFarmerDto {
  @ApiProperty()
  @Length(11, 11, {
    message: "Phone number must be at must be 11 characters long.",
  })
  phone_number: string;
}

export class getFarmerByIdDtoResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  pentrar_farmer_id: string;

  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  list_of_produce: string;

  @ApiProperty()
  is_active: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  created_by_id: string;

  @ApiProperty()
  last_active: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  status: string;

  @ApiProperty({ type: () => TransporterInfoDto, isArray: true })
  transporters: TransporterInfoDto[];
}
export class getFarmerInfoResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  pentrar_farmer_id: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  list_of_produce: string;

  @ApiProperty()
  is_active: boolean;

  @ApiProperty()
  email: string;

  @ApiProperty({ type: () => TransporterInfoDto, isArray: true })
  transporters: TransporterInfoDto[];
}

class FarmerDataResponse {
  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;

  @ApiProperty()
  current_page: number;

  @ApiProperty()
  page_size: number;

  @ApiProperty({
    type: () => getFarmerByIdDtoResponse,
    isArray: true,
  })
  farmers_list: getFarmerByIdDtoResponse[];
}

export class GetAllFarmerResponse {
  @ApiProperty()
  message: string;
  @ApiProperty()
  data: FarmerDataResponse;
}
