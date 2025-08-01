import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({ transform: true, enableDebugMessages: true }),
  );

  const configService = app.get(ConfigService);
  const port = configService.get<number>('backend_port') || 80;

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',

  })

  const config = new DocumentBuilder()
    .setTitle('Neofelis Server')
    .setDescription('Neofelis application server')
    .setVersion('1.0')
    .addTag('neofelis')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/swagger', app, document);

  await app.listen(port);

  Logger.log(`🚀 Neofelis server is up and running! ${await app.getUrl()}`);
}

bootstrap();
