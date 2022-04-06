import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { v4 } from 'uuid';

export type TripDocument = Trip & Document;

export class Start {
  time: number;
  lat: string;
  lon: string;
  address: string
}

export class End {
  time: number;
  lat: string;
  lon: string;
  address: string
}


@Schema()
export class Trip {
  @Prop({default: genUUIDv4()})
  id: string;

  @Prop()
  start: Start;

  @Prop()
  end: End;

  @Prop()
  distance: number;

  @Prop()
  duration: number;

  @Prop()
  overspeedsCount: number;

  @Prop()
  boundingBox: any[];

}

export const TripSchema = SchemaFactory.createForClass(Trip);


function genUUIDv4() {
  return v4()
}