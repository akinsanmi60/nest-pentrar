/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UseInterceptors,
} from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";
import { MailService } from "src/mail/mail.service";
import { GetAllCompanyDto, UpdateCompanyDto } from "./dto/company.dto";
import { Prisma } from "../../prisma/generated/client";
import { ResponseInterceptor } from "../responeFilter/respone.service";

@UseInterceptors(ResponseInterceptor)
@Injectable()
export class CompanyService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  async getAllCompanies(dto: GetAllCompanyDto) {
    const {
      created_at,
      page = 1,
      limit = 10,
      id,
      search,
      pentrar_company_id,
      status,
      phone_number,
    } = dto;

    try {
      const limitNumber = Number(limit);
      const skip = ((page as number) - 1) * limitNumber;
      const offset = limitNumber;

      const where: { [key: string]: any } = {};

      if (id) {
        where.id = { contains: id, mode: "insensitive" };
      }

      if (pentrar_company_id) {
        where.pentrar_company_id = {
          contains: pentrar_company_id,
        };
      }

      if (status) {
        where.status = status;
      }

      if (created_at) {
        where.created_at = {
          gte: new Date(created_at).toISOString(),
        };
      }

      if (phone_number) {
        where.phone_number = {
          contains: phone_number,
        };
      }

      if (search) {
        where.OR = [
          {
            company_name: search.toString(),
          },
          {
            legal_entity_name: search.toString(),
          },
          {
            tax_identification_number: search.toString(),
          },
          {
            phone_number: search.toString(),
          },
          {
            pentrar_company_id: search.toString(),
          },
          { id: { contains: search.toString(), mode: "insensitive" } },
          // Add more fields as needed
        ];
      }

      const [allcompanies, totalCount] = await Promise.all([
        this.prisma.company.findMany({
          where,
          select: {
            id: true,
            created_at: true,
            company_name: true,
            last_active: true,
            company_address: true,
            phone_number: true,
            status: true,
            email: true,
            updated_at: true,
            is_active: true,
            pentrar_company_id: true,
            company_type: true,
            point_of_contact: true,
            legal_entity_name: true,
            tax_identification_number: true,
            aggregators: {
              select: {
                id: true,
                first_name: true,
                last_name: true,
                phone_number: true,
                email: true,
                is_active: true,
                pentrar_aggregator_id: true,
              },
            },
            farmers: {
              select: {
                id: true,
                first_name: true,
                last_name: true,
                phone_number: true,
                list_of_produce: true,
                is_active: true,
              },
            },
            transporters: {
              select: {
                id: true,
                first_name: true,
                last_name: true,
                phone_number: true,
                is_active: true,
                pentrar_trans_id: true,
              },
            },
          },
          orderBy: { created_at: "desc" },
          skip,
          take: offset as number,
        }),
        this.prisma.company.count({
          where,
        }),
      ]);

      const totalPages = Math.ceil(totalCount / limitNumber);

      const message = allcompanies.length
        ? "Companies fetched successfully"
        : "No Companies Found";
      const success = allcompanies?.length ? true : false;

      return {
        message,
        data: {
          total: success ? totalCount : 0,
          total_pages: success ? totalPages : 0,
          current_page: success ? Number(page) : 0,
          page_size: success ? offset : 0,
          companies_list: allcompanies,
        },
      };
    } catch (error) {
      console.error("Error in get all Companies:", error);
      throw error;
    }
  }

  async activateCompany(id: string) {
    const user_time_created = new Date();

    const activatedCompany = await this.prisma.company.update({
      where: { id },
      data: {
        is_active: true,
        updated_at: user_time_created,
      },
    });

    if (!activatedCompany) {
      throw new BadRequestException("Cannot  activate  company");
    }

    return {
      message: "Company activated successfully",
      data: {
        ...activatedCompany,
      },
    };
  }

  async deactivateCompany(id: string) {
    const user_time_created = new Date();

    const deactivated_Company = await this.prisma.company.update({
      where: { id },
      data: {
        is_active: false,
        updated_at: user_time_created,
      },
    });

    if (!deactivated_Company) {
      throw new BadRequestException("Cannot deactivate company");
    }

    if (deactivated_Company) {
      await this.mailService.deactiveVariousUsers({
        to: deactivated_Company.email,
        data: {
          name: deactivated_Company.company_name,
        },
      });

      return {
        message: "Company deactivated successfully",
        data: {
          ...deactivated_Company,
        },
      };
    }
  }

  async updateCompany(id: string, dto: UpdateCompanyDto) {
    const { email } = dto;
    const availableCompany = await this.prisma.company.findUnique({
      where: { id },
    });

    if (!availableCompany) {
      throw new BadRequestException("Company not found");
    }

    const user_time_created = new Date(); // Make sure to implement generatedTime function

    const companyUpdated = await this.prisma.company.update({
      where: { id },
      data: {
        email: email,
        updated_at: user_time_created,
      },
    });

    if (!companyUpdated) {
      throw new BadRequestException("Failed to update company");
    }

    return {
      message: "Company updated successfully",
      data: {
        ...companyUpdated,
      },
    };
  }

  async deleteCompany(id: string) {
    try {
      const deletedCompany = await this.prisma.company.delete({
        where: { id },
      });

      if (!deletedCompany) {
        throw new BadRequestException("Company not found");
      }

      return {
        message: "Company deleted successfully",
        data: {
          ...deletedCompany,
        },
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Handle Prisma known errors, e.g., record not found
        if (error.code === "P2025") {
          throw new BadRequestException("Company not found");
        }
      }

      console.error("Error deleting aggregator:", error);
      throw new InternalServerErrorException("Failed to delete aggregator");
    }
  }

  async getCompanyById(id: string) {
    const company = await this.prisma.company.findUnique({
      where: { id },
      select: {
        id: true,
        created_at: true,
        company_name: true,
        last_active: true,
        legal_entity_name: true,
        phone_number: true,
        status: true,
        email: true,
        updated_at: true,
        is_active: true,
        pentrar_company_id: true,
        aggregators: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
            phone_number: true,
            email: true,
            is_active: true,
            pentrar_aggregator_id: true,
          },
        },
        farmers: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
            phone_number: true,
            list_of_produce: true,
            is_active: true,
            pentrar_farmer_id: true,
          },
        },
        transporters: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
            phone_number: true,
            is_active: true,
            pentrar_trans_id: true,
            vehicle_number: true,
            vehicle_type: true,
          },
        },
      },
    });

    if (!company) {
      throw new BadRequestException("Company not found");
    }

    return {
      message: "Company fetched successfully",
      data: {
        ...company,
      },
    };
  }
}
