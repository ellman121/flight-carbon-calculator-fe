import * as airports from './airports.json'
import haversine from 'haversine-distance'

export function useAirportList() {
  return airports as AirportsApi.Airport[];
}

export function useAirportDistance(
  origin?: AirportsApi.Airport,
  destination?: AirportsApi.Airport
) {
  if (origin === undefined || destination === undefined) {
    return 0
  } 
  
  return haversine(origin.coords, destination.coords)
}
