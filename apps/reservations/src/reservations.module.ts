import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/common';
import { ReservationsController } from '@reservations/reservations.controller';
import { ReservationsService } from '@reservations/reservations.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
