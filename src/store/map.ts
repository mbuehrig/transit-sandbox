import Layerer from '@/globalHelpers/Layerer';
import mapboxgl from 'mapbox-gl';

/** BEGIN INTERFACE */
export interface IMapState {
  mapKey: string;
  map: mapboxgl.Map|null;
}
/** END INTERFACES */

/** BEGIN ENUMS */
export enum MapCommits {
  SetMap = 'Map.SetMap',
}

export enum MapDispatches {
  Init = 'Map.Init',
}
/** END ENUMS */

const defaultState: IMapState = {
  mapKey: 'pk.eyJ1Ijoic2hldmF6cmkiLCJhIjoiY2pjMmJxajRsMGE5dTMzbW16dnprZjA1dCJ9.8ugkDgu9Wk8M-e30WPCRlg',
  map: null,
};

const mutations = {
  [MapCommits.SetMap]: (state: IMapState, payload: mapboxgl.Map) => {
    state.map = payload;
  },
};

const actions = {
  [MapDispatches.Init]: ({ commit, state }, payload: HTMLElement) => {
    mapboxgl.accessToken = state.mapKey;

    const map = new mapboxgl.Map({
      container: payload,
      style: 'mapbox://styles/mapbox/streets-v11',
      bounds: [
        [-72.95666698353999, 41.28363171698385],
        [-72.86529107782349, 41.339251492766465],
      ],
    });

    window.Layerer = new Layerer(map);

    commit(MapCommits.SetMap, map);
  },
};

export const mapModule = {
  state: defaultState,
  mutations,
  actions,
};
