import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import { CorsConfig, NestConfig, SwaggerConfig } from "./common/configs/config.interface";



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // enable shutdown hook
  app.enableShutdownHooks();

 
  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');


    if (swaggerConfig.enabled) {
    const options = new DocumentBuilder()
      .setTitle(swaggerConfig.title || 'Nestjs')
      .setDescription(swaggerConfig.description || 'The nestjs API description')
      .setVersion(swaggerConfig.version || '1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(swaggerConfig.path || 'api', app, document);
    }
  
  
  // Cors
  if (corsConfig.enabled) {
    app.enableCors();
  }

  await app.listen(nestConfig.port || 9000);
}
bootstrap();
