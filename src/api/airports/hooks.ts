import * as airports from './airports.json'
import haversine from 'haversine-distance'

export function useAirportList() {
    
}

// useAirportDistance()

interface Airport {
  name: string;
  code: string;
  coords: {
    lat: number;
    lon: number;
  }
}

export function useAirportDistance(
  origin: Airport,
  destination: Airport
) {
  return haversine(origin.coords, destination.coords)
}
