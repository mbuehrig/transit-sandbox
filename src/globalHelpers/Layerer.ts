import { IColors, ILeg } from '@/interfaces/shared';
// eslint-disable-next-line import/no-unresolved
import { GeoJsonProperties, Geometry, Feature } from 'geojson';
import mapboxgl from 'mapbox-gl';

class Layerer {
  private map: mapboxgl.Map;

  private activeLayers: Array<string>;

  public options: {
    variables: {
      primary: string;
      secondary: string;
    };
  }

  constructor(_map: mapboxgl.Map) {
    this.map = _map;

    this.options = {
      variables: {
        primary: '--primaryColor',
        secondary: '--secondaryColor',
      },
    };

    this.activeLayers = [];
  }

  /**
   * GeoJSON for multilinestring
   *
   * @private
   * @memberof Layerer
   */
  private getGeoJSONForMultiLineString = (object: ILeg) => (({
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: object.coordinates,
    },
    properties: {
      id: object.id,
    },
  } as Feature<Geometry, GeoJsonProperties>));

  /**
   * Draw line
   *
   * @memberof Layerer
   */
  public drawLine = (leg: ILeg, colors: IColors) => {
    const { id } = leg;

    this.map.addSource(`s${id}`, {
      type: 'geojson',
      data: this.getGeoJSONForMultiLineString(leg),
    });

    this.map.addLayer({
      id: `${id}`,
      type: 'line',
      source: `s${id}`,
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': colors.primary,
        'line-width': 12,
      },
    });
  }

  public updateColorsOnLines = (legs: Array<ILeg>, colors: IColors) => {
    legs.forEach((leg) => {
      this.map.setPaintProperty(leg.id, 'line-color', colors.primary);
    });
  }
}

export default Layerer;
