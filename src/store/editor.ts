/** BEGIN INTERFACE */
import { IStation, IColors } from '../interfaces/shared';

export interface IEditorState {
  lineUid: string|null;
  colors: IColors;
  mode?: number;
  stations: Array<IStation>;
}
/** END INTERFACES */

/** BEGIN ENUMS */
export enum EditorCommits {
  SetUid = 'Editor.SetUid',
  SetPrimaryColor = 'Editor.SetPrimaryColor',
  SetSecondaryColor = 'Editor.SetSecondaryColor',
  SetMode = 'Editor.SetMode',
  AddStation = 'Editor.AddStation',
}

export enum EditorDispatches {
}
/** END ENUMS */

const defaultState: IEditorState = {
  lineUid: null,
  colors: {
    primary: '',
    secondary: '#fff',
  },
  stations: [],
};

const mutations = {
  [EditorCommits.SetUid]: (state: IEditorState, payload: string) => {
    state.lineUid = payload;
  },
  [EditorCommits.SetPrimaryColor]: (state: IEditorState, payload: string) => {
    state.colors.primary = payload;
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
};

const actions = {
};

export const editorModule = {
  state: defaultState,
  mutations,
  actions,
};
