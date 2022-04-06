import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Trip, TripDocument } from '../schema/trip.schema';
import { Model } from 'mongoose';
import { ReadingDto } from '../schema/reading.dto';
import { getDistance } from '../../utils/operations';

var BoundingBox = require('boundingbox')

@Injectable()
export class TripService {
  constructor(
    @InjectModel(Trip.name) private tripModel: Model<TripDocument>
  ) { }


  public async createNewTrip(readings: ReadingDto[]) {

    if (readings.length < 5) throw new HttpException("Deben ser más de 5 readings", 400);

    for (let read of readings) {
      if (read.time == null || read.time.toString.length == 0) throw new HttpException("El valor time es requerido o no debe ser nulo", 400)
    }

    const trip = new Trip();

    readings.sort((a, b) => (a.time > b.time) ? 1 : -1);

    let minReading = readings[0];
    let maxReading = readings[readings.length - 1];

    trip.start = {
      time: minReading.time,
      lat: minReading.location.lat,
      lon: minReading.location.lon,
      address: ""
    }

    trip.end = {
      time: maxReading.time,
      lat: maxReading.location.lat,
      lon: maxReading.location.lon,
      address: ""
    }

    const distance = getDistance({ "lat": minReading.location.lat, "lon": minReading.location.lon }, { "lat": maxReading.location.lat, "lon": maxReading.location.lon });

    console.log(distance);

    trip.distance = Number(distance);
    
    const duration = 36000;

    trip.duration = duration;

    let isOverBefore: boolean = true;
    let overspeedsCount = 0;
    let isOver = false;


    for (let reading of readings) {

      if (reading.speed > reading.speedLimit) {

       isOver = true

      } else {
        if (isOver) overspeedsCount += 1;
        isOver = false;
      }

    }
    if (isOver) overspeedsCount += 1;
    console.log(overspeedsCount)

    trip.overspeedsCount = overspeedsCount;

    var bbox = new BoundingBox({ minlat: minReading.location.lat, minlon: minReading.location.lon, maxlat: maxReading.location.lat, maxlon: maxReading.location.lon })

    
    const boundingBox = []

    for (let coord of bbox.toGeoJSON().geometry.coordinates[0][0]) {
      
      boundingBox.push({"lat":coord[1],"lon":coord[0]})
      
    } 

    console.log(boundingBox)

    trip.boundingBox = boundingBox

    console.log(trip)

    const createdTrip = new this.tripModel(trip);

    return createdTrip.save();

  }


}
