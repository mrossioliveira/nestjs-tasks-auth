import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('Main');

async function bootstrap() {
  const microserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 8000,
    },
  };

  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen(() => logger.log('Auth microservice running...'));
}
bootstrap();
