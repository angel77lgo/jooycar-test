import { Test } from "@nestjs/testing";
import { TripController } from "../controllers/trip.controller";
import { ReadingDto, ReadingsDto } from "../schema/reading.dto";
import { Trip } from "../schema/trip.schema";
import { TripService } from "../services/trip.service";
import { tripStub } from "./trip.sub";

jest.mock('../services/trip.service');

describe("TripService", () => {
  let tripService: TripService
  let tripController: TripController

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers:[TripController],
      providers: [TripService]
    }).compile();

    tripService = moduleRef.get<TripService>(TripService);
    tripController = moduleRef.get<TripController>(TripController);

  })

  describe('getTrips', () => {
    describe('when a trip a call service', () => {



    })
  });

  describe('createTrip', () => {
    describe('when createTrip is called', () => {
      let trip: Trip;
      let createTripDto: ReadingsDto;

      beforeEach(async () => {

        createTripDto = {"readings":[{"time":1642500462000,"speed":10,"speedLimit":38,"location":{"lat":-33.580158,"lon":-70.567227}},{"time":1642500466000,"speed":19,"speedLimit":38,"location":{"lat":-33.58013,"lon":-70.566995}},{"time":1642500470000,"speed":28,"speedLimit":38,"location":{"lat":-33.580117,"lon":-70.566633}},{"time":1642500474000,"speed":13,"speedLimit":38,"location":{"lat":-33.580078,"lon":-70.566408}},{"time":1642500478000,"speed":48,"speedLimit":38,"location":{"lat":-33.580005,"lon":-70.566498}},{"time":1642500482000,"speed":32,"speedLimit":38,"location":{"lat":-33.58002,"lon":-70.566837}},{"time":1642500486000,"speed":39,"speedLimit":38,"location":{"lat":-33.580038,"lon":-70.567265}},{"time":1642500490000,"speed":40,"speedLimit":38,"location":{"lat":-33.580043,"lon":-70.56773}},{"time":1642500494000,"speed":39,"speedLimit":38,"location":{"lat":-33.580048,"lon":-70.56817}},{"time":1642500498000,"speed":40,"speedLimit":38,"location":{"lat":-33.580053,"lon":-70.568502}}]}

        trip = await tripController.createAction(createTripDto);
      })

     
      test('then it should return a trip', () => {
        expect(trip).toEqual(undefined)
      })
    })
  })
})
