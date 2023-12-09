import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString, IsUUID, Length } from "class-validator";
import { AggregatorInfoDto } from "src/userAggregator/dto/aggregator.dto";
import { getFarmerInfoResponse } from "src/userFarmer/dto/farmer.dto";
import { TransporterInfoDto } from "src/userTransporter/dto/transporter.dto";

export class GetAllCompanyDto {
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
  pentrar_company_id: string;

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

export class ActivateCompanyDto {
  @ApiProperty({
    example: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    required: true,
  })
  @IsUUID("4", { message: "ID must be a valid UUID." })
  id: string;
}

export class UpdateCompanyDto {
  @ApiProperty()
  @IsEmail({}, { message: "Please provide a valid email address." })
  email: string;
}

export class getCompanyByIdDtoResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  company_name: string;

  @ApiProperty()
  last_active: string;

  @ApiProperty()
  legal_entity_name: string;

  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  is_active: string;

  @ApiProperty()
  pentrar_company_id: string;

  @ApiProperty({
    type: () => getFarmerInfoResponse,
    isArray: true,
  })
  farmers: getFarmerInfoResponse[];

  @ApiProperty({
    type: () => AggregatorInfoDto,
    isArray: true,
  })
  aggregators: AggregatorInfoDto[];

  @ApiProperty({
    type: () => TransporterInfoDto,
    isArray: true,
  })
  transporters: TransporterInfoDto[];
}

class CompanyDataResponse {
  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;

  @ApiProperty()
  current_page: number;

  @ApiProperty()
  page_size: number;

  @ApiProperty({
    type: () => getCompanyByIdDtoResponse,
    isArray: true,
  })
  companies_list: getCompanyByIdDtoResponse[];
}

export class GetAllCompanyResponse {
  @ApiProperty()
  message: string;
  @ApiProperty()
  data: CompanyDataResponse;
}
