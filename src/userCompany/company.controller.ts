import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from "@nestjs/common";
import { CompanyService } from "./company.service";
import {
  GetAllCompanyDto,
  GetAllCompanyResponse,
  UpdateCompanyDto,
  getCompanyByIdDtoResponse,
} from "./dto/company.dto";
import {
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";

@ApiTags("Company")
@Controller("company")
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get("allComapanies")
  @ApiQuery({ type: GetAllCompanyDto, required: false })
  @ApiResponse({ type: GetAllCompanyResponse })
  async getAllCompanies(@Query() dto) {
    return this.companyService.getAllCompanies(dto);
  }

  @Post(":id/activate-company")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({ type: getCompanyByIdDtoResponse })
  async activateCompany(@Param("id") id: string) {
    return await this.companyService.activateCompany(id);
  }

  @Post(":id/deactivate-company")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({ type: getCompanyByIdDtoResponse })
  async deactivateCompany(@Param("id") id) {
    console.log(id);
    return await this.companyService.deactivateCompany(id);
  }

  @Put(":id/update-company")
  @ApiParam({ name: "id" })
  @ApiBody({ type: UpdateCompanyDto })
  @ApiResponse({ type: getCompanyByIdDtoResponse })
  async updateAggregator(@Param("id") id, @Body() dto) {
    return await this.companyService.updateCompany(id, dto);
  }

  @Delete(":id/delete-company")
  @ApiParam({ name: "id", type: String })
  @ApiResponse({ type: getCompanyByIdDtoResponse })
  async deleteCompany(@Param("id") id) {
    return await this.companyService.deactivateCompany(id);
  }

  @Get(":id/individual-company")
  @ApiParam({ name: "id", type: String })
  @ApiResponse({ type: getCompanyByIdDtoResponse })
  async getCompanyById(@Param("id") id) {
    return await this.companyService.getCompanyById(id);
  }
}
