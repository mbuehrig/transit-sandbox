/** STATION INterface */
export interface IStation {
  stationName: string;
  lngLat: ILngLat;
}

/** LAT LONG INTERFACE */
export interface ILngLat {
  lat: number;
  lng: number;
}

/** COLORS INTERFACE */
export interface IColors {
  primary: string;
  secondary: string;
}
