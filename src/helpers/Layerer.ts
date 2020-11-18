import mapboxgl from 'mapbox-gl';

import { IStation, IColors } from '../store/interfaces/interfaces';

class Layerer {
  private map: mapboxgl.Map;

  private editorMarkers: Array<mapboxgl.Marker>;

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

    this.editorMarkers = [];
  }

  addStationOnMap(station: IStation, colors: IColors, shape: string) {
    const markerEl: HTMLDivElement = document.createElement('div');

    markerEl.className = `map-station map-station--${shape}`;
    markerEl.style.setProperty(this.options.variables.primary, colors.primary);
    markerEl.style.setProperty(this.options.variables.secondary, colors.secondary);

    const marker: mapboxgl.Marker = new mapboxgl.Marker(markerEl)
      .setLngLat(station.latLng)
      .addTo(this.map);

    this.editorMarkers.push(marker);
  }

  updateColorsOnStations(colors: IColors) {
    this.editorMarkers.forEach((marker) => {
      const markerEl = marker.getElement();

      markerEl.style.setProperty(this.options.variables.primary, colors.primary);
      markerEl.style.setProperty(this.options.variables.secondary, colors.secondary);
    });
  }
}

export default Layerer;
