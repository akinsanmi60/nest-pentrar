import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUUID, Length } from "class-validator";

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
