import { Module, RequestMethod } from '@nestjs/common';
import { DatabaseModule } from '@app/common';
import { ReservationsController } from '@reservations/reservations.controller';
import { ReservationsService } from '@reservations/reservations.service';
import { ReservationsRepository } from '@reservations/reservations.repository';
import {
  ReservationDocument,
  ReservationSchema,
} from '@reservations/models/reservation.schema';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationSchema },
    ]),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            // colorize: true,
          },
        },
      },
      exclude: [{ method: RequestMethod.ALL, path: 'check' }],
    }),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
