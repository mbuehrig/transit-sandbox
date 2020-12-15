/** BEGIN INTERFACE */
import { IStation, IColors, ILeg } from '../interfaces/shared';

export interface IEditorState {
  lineUid: string;
  colors: IColors;
  mode?: number;
  stations: Array<IStation>;
  legs: Array<ILeg>;
}
/** END INTERFACES */

/** BEGIN ENUMS */
export enum EditorCommits {
  SetUid = 'Editor.SetUid',
  SetPrimaryColor = 'Editor.SetPrimaryColor',
  SetSecondaryColor = 'Editor.SetSecondaryColor',
  SetMode = 'Editor.SetMode',
  AddStation = 'Editor.AddStation',
  AddLeg = 'Editor.AddLeg',
}

export enum EditorDispatches {
  AddStationAndGetRoute = 'Editor.AddStationAndGetRoute',
}
/** END ENUMS */

const defaultState: IEditorState = {
  lineUid: '',
  colors: {
    primary: '',
    secondary: '#fff',
  },
  stations: [],
  legs: [],
};

const mutations = {
  [EditorCommits.SetUid]: (state: IEditorState, payload: string) => {
    state.lineUid = payload;
  },
  [EditorCommits.SetPrimaryColor]: (state: IEditorState, payload: string) => {
    state.colors.primary = payload;

    window.Layerer.updateColorsOnLines(state.legs, state.colors);
  },
  [EditorCommits.SetSecondaryColor]: (state: IEditorState, payload: string) => {
    state.colors.secondary = payload;
  },
  [EditorCommits.SetMode]: (state: IEditorState, payload: number) => {
    state.mode = payload;
  },
  [EditorCommits.AddStation]: (state: IEditorState, payload: IStation) => {
    state.stations.push(payload);
  },
  [EditorCommits.AddLeg]: (state: IEditorState, payload: ILeg) => {
    state.legs.push(payload);
  },
};

const actions = {
  [EditorDispatches.AddStationAndGetRoute]: ({ state, commit }, { station, colors }) => {
    const newStation = station;
    const stationBefore = state.stations[state.stations.length - 1];

    if (state.stations.length > 0) {
      window.Directerer
        .getDirectionsBetweenStation(stationBefore, newStation,
          (route) => {
            const leg: ILeg = {
              coordinates: (route as any).routes[0].geometry.coordinates,
              id: `${newStation.id}_${stationBefore.id}`,
            };

            commit(EditorCommits.AddLeg, leg);

            window.Layerer.drawLine(leg, colors.value);
          });
    }

    commit(EditorCommits.AddStation, newStation);
  },
};

export const editorModule = {
  state: defaultState,
  mutations,
  actions,
};
