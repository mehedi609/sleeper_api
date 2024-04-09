import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from '@reservations/reservations.module';
import { Logger } from 'nestjs-pino';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule, {
    bufferLogs: true,
  });
  await app.listen(5000);
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger));
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
