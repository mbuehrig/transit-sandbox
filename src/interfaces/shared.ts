/** STATION INterface */
export interface IStation {
  stationName: string;
  lngLat: ILngLat;
  id?: string;
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

/** INLINE */
export interface ILeg {
  coordinates: Array<Array<number>>;
  id: string;
}
