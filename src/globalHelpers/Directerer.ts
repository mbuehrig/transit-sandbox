import { ILngLat, IStation } from '@/interfaces/shared';
import axios from 'axios';

class Directerer {
  private options: {
    routerUrl: string;
  }

  constructor() {
    this.options = {
      routerUrl: 'http://router.project-osrm.org/route/v1/driving',
    };
  }

  /**
   * Get Directions between Stations
   *
   * @memberof Directerer
   * @returns any
   */
  getDirectionsBetweenStation = (
    stationStart: IStation,
    stationEnd: IStation,
    callback: Function,
  ) => {
    const request = this.getOSRMRoute(stationStart.lngLat, stationEnd.lngLat);
    let route;

    request.then((response) => {
      route = response.data;

      callback(route);
    });
  }

  getOSRMRoute = (beginCoord: ILngLat, endCoord: ILngLat) => {
    const routeUrl = `${this.options.routerUrl}/${beginCoord.lng},${beginCoord.lat};${endCoord.lng},${endCoord.lat}?geometries=geojson`;

    return axios.get(routeUrl);
  }
}

export default Directerer;
