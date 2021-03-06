import { ApiProperty } from "@nestjs/swagger";

export class Location {
  @ApiProperty()
  lat: number;
  
  @ApiProperty()
  lon: number;
}

export class ReadingDto {
  @ApiProperty()
  time: number;

  @ApiProperty()
  speed: number;

  @ApiProperty()
  speedLimit: number;

  @ApiProperty()
  location: Location

}

export class ReadingsDto {
  @ApiProperty()
  readings: ReadingDto[]
}