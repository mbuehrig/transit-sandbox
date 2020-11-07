/** BEGIN INTERFACE */
export interface IEditorState {
  lineUid: string|null;
  colors: {
    primary: string;
    secondary: string;
  };
  mode?: number;
}
/** END INTERFACES */

/** BEGIN ENUMS */
export enum EditorCommits {
  SetUid = 'Editor.SetUid',
  SetPrimaryColor = 'Editor.SetPrimaryColor',
  SetSecondaryColor = 'Editor.SetSecondaryColor',
  SetMode = 'Editor.SetMode',
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
};

const actions = {
};

export const editorModule = {
  state,
  mutations,
  actions,
};
