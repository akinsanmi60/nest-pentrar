import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UseInterceptors,
} from "@nestjs/common";
import { GetAllFarmerDto, UpdateFarmerDto } from "./dto/farmer.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { ResponseInterceptor } from "../responeFilter/respone.service";
import { MailService } from "../mail/mail.service";
import { Prisma } from "../../prisma/generated/client";

@UseInterceptors(ResponseInterceptor)
@Injectable()
export class FarmerService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}
  async getAllFarmers(dto: GetAllFarmerDto) {
    const {
      created_at,
      page = 1,
      limit = 10,
      id,
      search,
      pentrar_farmer_id,
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

      if (pentrar_farmer_id) {
        where.pentrar_farmer_id = {
          contains: pentrar_farmer_id,
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
            first_name: search.toString(),
          },
          {
            last_name: search.toString(),
          },
          {
            pentrar_farmer_id: search.toString(),
          },
          { id: { contains: search.toString(), mode: "insensitive" } },
          // Add more fields as needed
        ];
      }

      const [allFarmers, totalCount] = await Promise.all([
        this.prisma.farmer.findMany({
          where,
          select: {
            id: true,
            created_at: true,
            first_name: true,
            last_active: true,
            last_name: true,
            phone_number: true,
            status: true,
            email: true,
            updated_at: true,
            is_active: true,
            pentrar_farmer_id: true,
            Transporter: {
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
          take: offset,
        }),
        this.prisma.farmer.count({
          where,
        }),
      ]);

      const totalPages = Math.ceil(totalCount / limitNumber);

      const message = allFarmers.length
        ? "Farmers fetched successfully"
        : "No farmers found";
      const success = allFarmers?.length ? true : false;

      return {
        message,
        data: {
          total: success ? totalCount : 0,
          total_pages: success ? totalPages : 0,
          current_page: success ? Number(page) : 0,
          page_size: success ? offset : 0,
          farmers_list: allFarmers,
        },
      };
    } catch (error) {
      console.error("Error in get all farmers:", error);
      throw error;
    }
  }

  async activateFarmer(id: string) {
    const user_time_created = new Date();

    const activatedFarmer = await this.prisma.farmer.update({
      where: { id },
      data: {
        is_active: true,
        updated_at: user_time_created,
      },
    });

    if (!activatedFarmer) {
      throw new BadRequestException("Cannot  activate farmer");
    }

    return {
      message: "Farmer activated successfully",
      data: {
        ...activatedFarmer,
      },
    };
  }

  async deactivateFarmer(id: string) {
    try {
      const user_time_created = new Date();

      const deactivatedFarmer = await this.prisma.farmer.update({
        where: { id },
        data: {
          is_active: false,
          updated_at: user_time_created,
        },
      });

      if (!deactivatedFarmer) {
        throw new BadRequestException("Cannot activate farmer");
      }

      if (deactivatedFarmer) {
        await this.mailService.deactiveVariousUsers({
          to: deactivatedFarmer.email,
          data: {
            name: deactivatedFarmer.first_name,
          },
        });

        return {
          message: "Farmer activated successfully",
          data: {
            ...deactivatedFarmer,
          },
        };
      }
    } catch (error) {
      throw new InternalServerErrorException("Internal server error");
    }
  }

  async updateFarmer(id: string, dto: UpdateFarmerDto) {
    const { phone_number } = dto;
    const availableFarmer = await this.prisma.farmer.findUnique({
      where: { id },
    });

    if (!availableFarmer) {
      throw new BadRequestException("Farmer not found");
    }

    const user_time_created = new Date(); // Make sure to implement generatedTime function

    const updatedUser = await this.prisma.farmer.update({
      where: { id },
      data: {
        phone_number: phone_number,
        updated_at: user_time_created,
      },
    });

    if (!updatedUser) {
      throw new BadRequestException("Failed to update user");
    }

    return {
      message: "Farmer updated successfully",
      data: {
        ...updatedUser,
      },
    };
  }

  async deleteFarmer(id: string) {
    try {
      const deletedFarmer = await this.prisma.farmer.delete({
        where: { id },
      });

      if (!deletedFarmer) {
        throw new BadRequestException("Farmer not found");
      }

      return {
        message: "Farmer deleted successfully",
        data: {
          ...deletedFarmer,
        },
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Handle Prisma known errors, e.g., record not found
        if (error.code === "P2025") {
          throw new BadRequestException("Farmer not found");
        }
      }

      console.error("Error deleting farmer:", error);
      throw new InternalServerErrorException("Failed to delete Farmer");
    }
  }
}
