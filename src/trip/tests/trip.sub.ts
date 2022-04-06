import { Trip } from "../schema/trip.schema";

export const tripStub = (): Trip => {
  return {
    _id: "2131211212s",
    start: {
      time: 1642500462000,
      lat: -33.580158,
      lon: -70.567227,
      address: ""
    },
    end: {

      time: 1642500498000,
      lat: -33.580053,
      lon: -70.568502,
      address: ""
    },
    distance: 0.119,
    duration: 36000,
    overspeedsCount: 2,
    boundingBox: [
      {
        "lat": -33.580158,
        "lon": -70.567227
      },
      {
        "lat": -33.580158,
        "lon": 180
      },
      {
        "lat": -33.580053,
        "lon": 180
      },
      {
        "lat": -33.580053,
        "lon": -70.567227
      },
      {
        "lat": -33.580158,
        "lon": -70.567227
      }
    ]
  }
}
