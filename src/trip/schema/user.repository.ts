import { InjectModel } from "@nestjs/mongoose";
import { EntityRepository } from "../../database/entity.repository";
import { Trip, TripDocument } from "./trip.schema";
import { Injectable } from "@nestjs/common";
import { FilterQuery, Model } from "mongoose";

@Injectable()
export class TripRepository extends EntityRepository<TripDocument> {
  constructor(@InjectModel(Trip.name) tripModel: Model<TripDocument>) {
    super(tripModel)
  }
}