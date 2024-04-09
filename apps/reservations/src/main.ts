import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from '@reservations/reservations.module';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  await app.listen(5000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
