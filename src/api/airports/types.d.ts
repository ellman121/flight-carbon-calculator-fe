declare module AirportsApi {
    interface Airport {
        name: string;
        code: string;
        coords: {
            lat: number;
            lon: number;
        }
    }
}
