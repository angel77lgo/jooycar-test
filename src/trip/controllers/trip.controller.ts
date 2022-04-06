import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ReadingDto, ReadingsDto } from '../schema/reading.dto';
import { TripService } from '../services/trip.service';

@ApiTags("Trip")
@Controller('/api/v1/trip')
export class TripController {

  constructor(
    private tripService: TripService
  ) {}

  @Post()
  @ApiBody({required: true, type: ReadingsDto})
  public async createAction(@Body() reading: ReadingsDto) {

    
    return await this.tripService.createNewTrip(reading.readings)    
  }

  @Get()
  @ApiQuery({name: 'startGte', required: false})
  @ApiQuery({name: 'startLte', required: false})
  @ApiQuery({name: 'distanceGte', required: false})
  @ApiQuery({name: 'limit', required: false})
  @ApiQuery({name: 'offset', required: false})
  public async getTrips(@Query('startGte') startGte?: number, @Query('startLte') startLte?: number, @Query('distanceGte') distanceGte?: number,
    @Query('limit') limit?: number, @Query('offset') offset?: number) {

  }
}
