import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TripController } from './controllers/trip.controller';
import { Trip, TripSchema } from './schema/trip.schema';
import { TripService } from './services/trip.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Trip.name, schema: TripSchema}])
  ],
  controllers: [TripController],
  providers: [TripService],
})
export class TripModule {}
