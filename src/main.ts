import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');

  await app.listen(port);

  Logger.log(`🚀 Neofelis is up and running! ${await app.getUrl()}`);
}

bootstrap();
