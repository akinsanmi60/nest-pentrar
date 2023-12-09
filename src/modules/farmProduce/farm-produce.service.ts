import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {
  AddProduceDto,
  GetAllProduceDto,
  ProduceUpdateDto,
} from "./dto/farm-produce.dto";
import { Prisma } from "../../../prisma/generated/client";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class FarmProduceService {
  constructor(private readonly prisma: PrismaService) {}

  async createFarmProduce(dto: AddProduceDto, id: string) {
    const { name, quantity, unit, image, description } = dto;

    const findeUser =
      (await this.findOneAggregatorById(id)) ||
      (await this.findOneCompanyById(id)) ||
      (await this.findOneFarmerById(id));

    if (!findeUser) {
      throw new BadRequestException("User not found");
    }

    const newProduce = await this.prisma.produce.create({
      data: {
        name: name,
        quantity: quantity,
        unit: unit,
        image: image,
        description: description,
        farmer_id: findeUser.id,
        pentrar_produce_id: uuidv4(),
      },
    });

    return {
      message: "Farm produce created successfully",
      data: {
        ...newProduce,
      },
    };
  }

  async getAllFarmProduce(dto: GetAllProduceDto) {
    const {
      created_at,
      page = 1,
      limit = 10,
      id,
      search,
      pentrar_produce_id,
      name,
    } = dto;

    try {
      const limitNumber = Number(limit);
      const skip = ((page as number) - 1) * limitNumber;
      const offset = limitNumber;

      const where: { [key: string]: any } = {};

      if (id) {
        where.id = { contains: id, mode: "insensitive" };
      }

      if (pentrar_produce_id) {
        where.pentrar_produce_id = {
          contains: pentrar_produce_id,
        };
      }

      if (created_at) {
        where.created_at = {
          gte: new Date(created_at).toISOString(),
        };
      }

      if (name) {
        where.name = {
          contains: name,
        };
      }

      if (search) {
        where.OR = [
          {
            pentrar_produce_id: search.toString(),
          },
          {
            name: search.toString(),
          },
          { id: { contains: search.toString(), mode: "insensitive" } },
          // Add more fields as needed
        ];
      }

      const [allproduce, totalCount] = await Promise.all([
        this.prisma.produce.findMany({
          where,
          select: {
            id: true,
            name: true,
            created_at: true,
            updated_at: true,
            pentrar_produce_id: true,
            description: true,
            quantity: true,
            farmer_id: true,
            image: true,
            unit: true,
          },
          orderBy: { created_at: "desc" },
          skip,
          take: offset as number,
        }),
        this.prisma.produce.count({
          where,
        }),
      ]);

      const totalPages = Math.ceil(totalCount / limitNumber);

      const message = allproduce.length
        ? "Produces fetched successfully"
        : "No Produces Found";
      const success = allproduce?.length ? true : false;

      return {
        message,
        data: {
          total: success ? totalCount : 0,
          total_pages: success ? totalPages : 0,
          current_page: success ? Number(page) : 0,
          page_size: success ? offset : 0,
          produces_list: allproduce,
        },
      };
    } catch (error) {
      console.error("Error in get all produce:", error);
      throw error;
    }
  }

  async deleteProduce(id: string) {
    try {
      const deletedProduce = await this.prisma.produce.delete({
        where: { id },
      });

      if (!deletedProduce) {
        throw new BadRequestException("Produce not found");
      }

      return {
        message: "Produce deleted successfully",
        data: {
          ...deletedProduce,
        },
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Handle Prisma known errors, e.g., record not found
        if (error.code === "P2025") {
          throw new BadRequestException("Produce not found");
        }
      }

      console.error("Error deleting produce:", error);
      throw new InternalServerErrorException("Failed to delete produce");
    }
  }

  async updateProduce(id: string, dto: ProduceUpdateDto) {
    const { quantity, unit, description } = dto;
    const availableProduce = await this.prisma.produce.findUnique({
      where: { id },
    });

    if (!availableProduce) {
      throw new BadRequestException("Produce not found");
    }

    const user_time_created = new Date(); // Make sure to implement generatedTime function

    const produceUpdated = await this.prisma.produce.update({
      where: { id },
      data: {
        quantity: quantity,
        unit: unit,
        description: description,
        updated_at: user_time_created,
      },
    });

    if (!produceUpdated) {
      throw new BadRequestException("Failed to update produce");
    }

    return {
      message: "Produce updated successfully",
      data: {
        ...produceUpdated,
      },
    };
  }

  async getProduceById(id: string) {
    const produce = await this.prisma.produce.findUnique({
      where: { id },
      select: {
        id: true,
        image: true,
        name: true,
        quantity: true,
        unit: true,
        created_at: true,
        updated_at: true,
        farmer_id: true,
        description: true,
        pentrar_produce_id: true,
      },
    });

    if (!produce) {
      throw new BadRequestException("Produce not found");
    }

    return {
      message: "Produce fetched successfully",
      data: {
        ...produce,
      },
    };
  }

  private async findOneAggregatorById(id: string) {
    return this.prisma.aggregator.findUnique({ where: { id } });
  }
  private async findOneCompanyById(id: string) {
    return this.prisma.company.findUnique({ where: { id } });
  }
  private async findOneFarmerById(id: string) {
    return this.prisma.farmer.findUnique({ where: { id } });
  }
}
