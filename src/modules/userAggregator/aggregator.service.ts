import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UseInterceptors,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ResponseInterceptor } from "../../responeFilter/respone.service";
import { MailService } from "../../mail/mail.service";
import { GetAllAggregatorDto, UpdateAggregatorDto } from "./dto/aggregator.dto";
import { Prisma } from "../../../prisma/generated/client";

@UseInterceptors(ResponseInterceptor)
@Injectable()
export class AggregratorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}
  async getAllAggregators(dto: GetAllAggregatorDto) {
    const {
      created_at,
      page = 1,
      limit = 10,
      id,
      search,
      pentrar_aggregator_id,
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

      if (pentrar_aggregator_id) {
        where.pentrar_aggregator_id = {
          contains: pentrar_aggregator_id,
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
            pentrar_aggregator_id: search.toString(),
          },
          {
            phone_number: search.toString(),
          },
          { id: { contains: search.toString(), mode: "insensitive" } },
          // Add more fields as needed
        ];
      }

      const [allAggregators, totalCount] = await Promise.all([
        this.prisma.aggregator.findMany({
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
            pentrar_aggregator_id: true,
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
        this.prisma.aggregator.count({
          where,
        }),
      ]);

      const totalPages = Math.ceil(totalCount / limitNumber);

      const message = allAggregators.length
        ? "Aggregators fetched successfully"
        : "No Aggregators Found";
      const success = allAggregators?.length ? true : false;

      return {
        message,
        data: {
          total: success ? totalCount : 0,
          total_pages: success ? totalPages : 0,
          current_page: success ? Number(page) : 0,
          page_size: success ? offset : 0,
          aggregators_list: allAggregators,
        },
      };
    } catch (error) {
      console.error("Error in get all aggregators:", error);
      throw error;
    }
  }

  async activateAggregator(id: string) {
    const user_time_created = new Date();

    const activatedAggregator = await this.prisma.aggregator.update({
      where: { id },
      data: {
        is_active: true,
        updated_at: user_time_created,
      },
    });

    if (!activatedAggregator) {
      throw new BadRequestException("Cannot  activate  aggregator");
    }

    return {
      message: "Aggregator activated successfully",
      data: {
        ...activatedAggregator,
      },
    };
  }

  async deactivateAggregator(id: string) {
    const user_time_created = new Date();

    const deactivatedAggregator = await this.prisma.aggregator.update({
      where: { id },
      data: {
        is_active: false,
        updated_at: user_time_created,
      },
    });

    if (!deactivatedAggregator) {
      throw new BadRequestException("Cannot deactivate aggregator");
    }

    if (deactivatedAggregator) {
      await this.mailService.deactiveVariousUsers({
        to: deactivatedAggregator.email,
        data: {
          name: deactivatedAggregator.first_name,
        },
      });

      return {
        message: "Aggregator deactivated successfully",
        data: {
          ...deactivatedAggregator,
        },
      };
    }
  }

  async updateAggregator(id: string, dto: UpdateAggregatorDto) {
    const { phone_number } = dto;
    const availableAggregator = await this.prisma.aggregator.findUnique({
      where: { id },
    });

    if (!availableAggregator) {
      throw new BadRequestException("Aggregator not found");
    }

    const user_time_created = new Date(); // Make sure to implement generatedTime function

    const aggregatorUpdated = await this.prisma.aggregator.update({
      where: { id },
      data: {
        phone_number: phone_number,
        updated_at: user_time_created,
      },
    });

    if (!aggregatorUpdated) {
      throw new BadRequestException("Failed to update aggregator");
    }

    return {
      message: "Aggregator updated successfully",
      data: {
        ...aggregatorUpdated,
      },
    };
  }

  async deleteAggregator(id: string) {
    try {
      const deletedAggregator = await this.prisma.aggregator.delete({
        where: { id },
      });

      if (!deletedAggregator) {
        throw new BadRequestException("Aggregator not found");
      }

      return {
        message: "Aggregator deleted successfully",
        data: {
          ...deletedAggregator,
        },
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Handle Prisma known errors, e.g., record not found
        if (error.code === "P2025") {
          throw new BadRequestException("Aggregator not found");
        }
      }

      console.error("Error deleting aggregator:", error);
      throw new InternalServerErrorException("Failed to delete aggregator");
    }
  }

  async getAggregatorById(id: string) {
    const aggregator = await this.prisma.aggregator.findUnique({
      where: { id },
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
        pentrar_aggregator_id: true,
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
    });

    if (!aggregator) {
      throw new BadRequestException("Aggregator not found");
    }

    return {
      message: "Aggregator fetched successfully",
      data: {
        ...aggregator,
      },
    };
  }
}
