import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Trip")
@Controller('/api/v1/trip')
export class TripController {

  @Post()
  public async createAction() {
    
  }
}
