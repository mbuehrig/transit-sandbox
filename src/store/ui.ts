import { EditorCommits } from './editor';

/** BEGIN INTERFACE */
export interface IUIState {
  actionButtons: Array<IActionButton>;
  editor: {
    active: boolean;
    mode: number;
    color: string;
    colorHex: string;
  };
}

export interface IActionButton {
  icon: string;
  mode: number;
  id: string;
  color: string;
  label: string;
  defaultColor: string;
}

export interface ISetEditor {
  mode: number;
  color: string;
  colorHex: string;
}
/** END INTERFACES */

/** BEGIN ENUMS */
export enum UICommits {
  SetEditor = 'UI.SetEditor'
}

export enum UIDispatches {
  SetEditorActive = 'UI.SetEditorActive'
}
/** END ENUMS */

const defaultState: IUIState = {
  actionButtons: [
    {
      icon: 'underground',
      mode: 1,
      color: 'Blue',
      id: 'underground',
      label: 'Underground',
      defaultColor: '#0e0857',
    },
    {
      icon: 'tram',
      mode: 2,
      id: 'tram',
      color: 'Green',
      label: 'Tram',
      defaultColor: '#0B5B21',
    },
    {
      icon: 'bus',
      mode: 3,
      id: 'bus',
      label: 'Bus',
      color: 'Red',
      defaultColor: '#7D0909',
    },
  ],
  editor: {
    active: false,
    mode: 0,
    color: '',
    colorHex: '',
  },
};

const mutations = {
  [UICommits.SetEditor]: (state: IUIState, payload: ISetEditor) => {
    state.editor.active = true;
    state.editor.mode = payload.mode;
    state.editor.color = payload.color;
    state.editor.colorHex = payload.colorHex;
  },
};

const actions = {
  [UIDispatches.SetEditorActive]: ({ commit }, payload: ISetEditor) => {
    commit(UICommits.SetEditor, payload);
    commit(EditorCommits.SetMode, payload.mode);
    commit(EditorCommits.SetPrimaryColor, payload.colorHex);
  },
};

export const uiModule = {
  state: defaultState,
  mutations,
  actions,
};
