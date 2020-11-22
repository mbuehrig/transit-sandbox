import mapboxgl from 'mapbox-gl';

class Layerer {
  private map: mapboxgl.Map;

  private tempLineLayer: Array<string>;

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

    this.tempLineLayer = [];
  }
}

export default Layerer;
