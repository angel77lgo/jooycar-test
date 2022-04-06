import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 } from 'uuid';
import { Document } from 'mongoose';

export type TripDocument = Trip & Document;

export class Start {
  time: number;
  lat: number;
  lon: number;
  address: string
}

export class End {
  time: number;
  lat: number;
  lon: number;
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