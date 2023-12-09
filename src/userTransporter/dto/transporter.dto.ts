import { ApiProperty } from "@nestjs/swagger";

export class TransporterResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  email: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  created_by_id: string;

  @ApiProperty()
  vehicle_type: string;

  @ApiProperty()
  vehicle_number: string;

  @ApiProperty()
  Vehicle_license: string;

  @ApiProperty()
  is_active: boolean;

  @ApiProperty()
  pentrar_trans_id: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  last_active: string;
}

export class TransporterInfoDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  vehicle_type: string;

  @ApiProperty()
  vehicle_number: string;

  @ApiProperty()
  is_active: boolean;

  @ApiProperty()
  pentrar_trans_id: string;

  @ApiProperty()
  phone_number: string;
}
