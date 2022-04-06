import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TripController } from './controllers/trip.controller';
import { Trip, TripSchema } from './schema/trip.schema';
import { TripRepository } from './schema/user.repository';
import { TripService } from './services/trip.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Trip.name, schema: TripSchema}])
  ],
  controllers: [TripController],
  providers: [TripService, TripRepository],
})
export class TripModule {}
