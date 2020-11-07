import mapboxgl from 'mapbox-gl';

/** BEGIN INTERFACE */
export interface IMapState {
  mapKey: string;
  map: any;
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

const state: IMapState = {
  mapKey: 'pk.eyJ1Ijoic2hldmF6cmkiLCJhIjoiY2pjMmJxajRsMGE5dTMzbW16dnprZjA1dCJ9.8ugkDgu9Wk8M-e30WPCRlg',
  map: null,
};

const mutations = {
  [MapCommits.SetMap]: (_state: IMapState, payload: any) => {
    _state.map = payload;
  },
};

const actions = {
  [MapDispatches.Init]: (context: any, payload: HTMLElement) => {
    mapboxgl.accessToken = context.state.mapKey;

    const map = new mapboxgl.Map({
      container: payload,
      style: 'mapbox://styles/mapbox/streets-v11',
    });

    context.commit(MapCommits.SetMap, map);
  },
};

export const mapModule = {
  state,
  mutations,
  actions,
};