import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  UseGuards,
} from "@nestjs/common";
import { CompanyService } from "./company.service";
import {
  GetAllCompanyDto,
  GetAllCompanyResponse,
  UpdateCompanyDto,
  getCompanyByIdDtoResponse,
} from "./dto/company.dto";
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { RolesGuard } from "src/roles/roles.guard";
import { JwtAuthGuard } from "src/auth/jwtAuth.guard";
import { Roles } from "src/roles/roles.decorator";
import { Role } from "src/roles/role.enum";

@ApiTags("Company")
@Controller("company")
@ApiBearerAuth()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get("allComapanies")
  @ApiQuery({ type: GetAllCompanyDto, required: false })
  @ApiResponse({ type: GetAllCompanyResponse })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin)
  async getAllCompanies(@Query() dto) {
    return this.companyService.getAllCompanies(dto);
  }

  @Post(":id/activate-company")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({ type: getCompanyByIdDtoResponse })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin)
  async activateCompany(@Param("id") id: string) {
    return await this.companyService.activateCompany(id);
  }

  @Post(":id/deactivate-company")
  @ApiParam({ name: "id", type: "string" })
  @ApiResponse({ type: getCompanyByIdDtoResponse })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin)
  async deactivateCompany(@Param("id") id) {
    return await this.companyService.deactivateCompany(id);
  }

  @Put(":id/update-company")
  @ApiParam({ name: "id" })
  @ApiBody({ type: UpdateCompanyDto })
  @ApiResponse({ type: getCompanyByIdDtoResponse })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin, Role.Company)
  async updateAggregator(@Param("id") id, @Body() dto) {
    return await this.companyService.updateCompany(id, dto);
  }

  @Delete(":id/delete-company")
  @ApiParam({ name: "id", type: String })
  @ApiResponse({ type: getCompanyByIdDtoResponse })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin, Role.SubAdmin)
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
