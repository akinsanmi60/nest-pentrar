import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";
import { Aggregator, Farmer, User } from "../../prisma/generated/client";

@Injectable()
export class AuthResolver {
  constructor(private prisma: PrismaService) {}

  findOneAggregatorByEmail(email: string): Promise<Aggregator | null> {
    return this.prisma.aggregator.findUnique({ where: { email } });
  }

  findOneAggregatorByPhone(phone_number: string): Promise<Aggregator | null> {
    return this.prisma.aggregator.findUnique({ where: { phone_number } });
  }

  findOneAggregatorById(id: string): Promise<Aggregator | null> {
    return this.prisma.aggregator.findUnique({ where: { id } });
  }
  findOneUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findOneUserByPhone(phone_number: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { phone_number } });
  }

  findOneUserById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }
  findOneFarmerByEmail(email: string): Promise<Farmer | null> {
    return this.prisma.farmer.findUnique({ where: { email } });
  }

  findOneFarmerByPhone(phone_number: string): Promise<Farmer | null> {
    return this.prisma.farmer.findUnique({ where: { phone_number } });
  }
  findOneFarmerById(id: string): Promise<Farmer | null> {
    return this.prisma.farmer.findUnique({ where: { id } });
  }
}
