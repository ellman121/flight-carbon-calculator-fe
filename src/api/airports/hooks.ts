import { useQuery } from 'react-query'
import haversine from 'haversine-distance'

export function useAirportList() {
  return useQuery(
    ['airports'],
    async () => {
      const airports = await fetch('http://localhost:5000/airports')
      return (await airports.json()) as AirportsApi.Airport[]
    }
  )
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
