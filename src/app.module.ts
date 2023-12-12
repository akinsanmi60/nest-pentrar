import { ResponseInterceptor } from "./responeFilter/respone.service";
import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma/prisma.service";
import config from "./common/configs/config";
import { ConfigModule } from "@nestjs/config";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { AuthModule } from "./auth/auth.module";
import { FarmProduceModule } from "./modules/farmProduce/farm-produce.module";
import { UserModule } from "./modules/user/user.module";
import { AggregatorModule } from "./modules/userAggregator/aggregator.module";
import { CompanyModule } from "./modules/userCompany/company.module";
import { FarmerModule } from "./modules/userFarmer/farmer.module";
import { ThrottlerModule, ThrottlerGuard } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";
import { UserTransporterModule } from "./modules/userTransporter/user-transporter.module";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    AuthModule,
    FarmerModule,
    AggregatorModule,
    UserModule,
    CompanyModule,
    UserTransporterModule,
    FarmProduceModule,
    ThrottlerModule.forRoot([
      {
        name: "short",
        ttl: 1000,
        limit: 3,
      },
      {
        name: "long",
        ttl: 60000,
        limit: 100,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    ResponseInterceptor,
    JwtService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
