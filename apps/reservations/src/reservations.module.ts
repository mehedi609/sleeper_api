import { Module } from '@nestjs/common';
import { DatabaseModule, LoggerModule } from '@app/common';
import { ReservationsController } from '@reservations/reservations.controller';
import { ReservationsService } from '@reservations/reservations.service';
import { ReservationsRepository } from '@reservations/reservations.repository';
import {
  ReservationDocument,
  ReservationSchema,
} from '@reservations/models/reservation.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationSchema },
    ]),
    LoggerModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
