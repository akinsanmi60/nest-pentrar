import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { PrismaService } from "./prisma/prisma.service";
import config from "./common/configs/config";
import { ConfigModule } from "@nestjs/config";
// import { PrismaModule, loggingMiddleware } from "nestjs-prisma";

@Module({
  imports: [
        ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
//  PrismaModule.forRoot({
//       isGlobal: true,
//       prismaServiceOptions: {
//         middlewares: [
//           // configure your prisma middleware
//           loggingMiddleware({
//             logger: new Logger("PrismaMiddleware"),
//             logLevel: "log",
//           }),
//         ],
//       },
//     }),
