import { Injectable } from "@nestjs/common";
import { MailService } from "../../mail/mail.service";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FarmProduceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  async getAllFarmProduce(dto) {
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
            first_name: search.toString(),
          },
          {
            last_name: search.toString(),
          },
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
        ? "Aggregators fetched successfully"
        : "No Aggregators Found";
      const success = allproduce?.length ? true : false;

      return {
        message,
        data: {
          total: success ? totalCount : 0,
          total_pages: success ? totalPages : 0,
          current_page: success ? Number(page) : 0,
          page_size: success ? offset : 0,
          aggregators_list: allproduce,
        },
      };
    } catch (error) {
      console.error("Error in get all aggregators:", error);
      throw error;
    }
  }
}
