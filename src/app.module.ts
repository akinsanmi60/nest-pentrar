import { ResponseInterceptor } from "./responeFilter/respone.service";
import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { PrismaService } from "./prisma/prisma.service";
import config from "./common/configs/config";
import { ConfigModule } from "@nestjs/config";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { FarmerModule } from "./farmer/farmer.module";
import { AggregatorModule } from "./userAggregator/aggregator.module";
import { UserModule } from "./user/user.module";
import { CompanyModule } from "./company/company.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    AuthModule,
    FarmerModule,
    AggregatorModule,
    UserModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, ResponseInterceptor],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
