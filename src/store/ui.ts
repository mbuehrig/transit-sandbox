import { EditorCommits } from './editor';

/** BEGIN INTERFACE */
export interface IUIState {
  actionButtons: Array<IActionButton>;
  editor: {
    active: boolean;
    mode: number;
    color: string;
  };
}

export interface IActionButton {
  icon: string;
  mode: number;
  id: string;
  color: string;
  colorHex: string;
  label: string;
}

export interface ISetEditor {
  mode: number;
  color: string;
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
      icon: 'directions_subway',
      mode: 1,
      id: 'underground',
      color: 'light-blue darken-4',
      colorHex: '#01579b',
      label: 'New underground line',
    },
    {
      icon: 'directions_railway',
      mode: 2,
      id: 'tram',
      color: 'green darken-4',
      colorHex: '#1b5e20',
      label: 'New tram line',
    },
    {
      icon: 'directions_bus',
      mode: 3,
      id: 'bus',
      color: 'deep-orange darken-4',
      colorHex: '#bf360c',
      label: 'New bus line',
    },
  ],
  editor: {
    active: false,
    mode: 0,
    color: '',
  },
};

const mutations = {
  [UICommits.SetEditor]: (state: IUIState, payload: ISetEditor) => {
    state.editor.active = true;
    state.editor.mode = payload.mode;
    state.editor.color = payload.color;
  },
};

const actions = {
  [UIDispatches.SetEditorActive]: ({ commit }, payload: ISetEditor) => {
    commit(UICommits.SetEditor, payload);
    commit(EditorCommits.SetMode, payload.mode);
    commit(EditorCommits.SetPrimaryColor, payload.color);
  },
};

export const uiModule = {
  state: defaultState,
  mutations,
  actions,
};
