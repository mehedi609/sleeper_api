import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReservationDocument } from '@reservations/models/reservation.schema';
import { Model } from 'mongoose';

@Injectable()
export class ReservationsRepository extends BaseRepository<ReservationDocument> {
  protected readonly logger = new Logger(ReservationsRepository.name);

  constructor(
    @InjectModel(ReservationDocument.name)
    reservationModel: Model<ReservationDocument>,
  ) {
    super(reservationModel);
  }
}
