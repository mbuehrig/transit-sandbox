/** BEGIN INTERFACE */
import { IStation, IColors } from '../interfaces/interfaces';

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

const state: IEditorState = {
  lineUid: null,
  colors: {
    primary: '',
    secondary: '#fff',
  },
  stations: [],
};

const mutations = {
  [EditorCommits.SetUid]: (_state: IEditorState, payload: string) => {
    _state.lineUid = payload;
  },
  [EditorCommits.SetPrimaryColor]: (_state: IEditorState, payload: string) => {
    _state.colors.primary = payload;
  },
  [EditorCommits.SetSecondaryColor]: (_state: IEditorState, payload: string) => {
    _state.colors.secondary = payload;
  },
  [EditorCommits.SetMode]: (_state: IEditorState, payload: number) => {
    _state.mode = payload;
  },
  [EditorCommits.AddStation]: (_state: IEditorState, payload: IStation) => {
    _state.stations.push(payload);
  },
};

const actions = {
};

export const editorModule = {
  state,
  mutations,
  actions,
};
