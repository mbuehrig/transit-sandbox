/** BEGIN INTERFACE */
export interface ILinesState {
  lines: Array<number>;
}
/** END INTERFACES */

/** BEGIN ENUMS */
export enum LinesCommits {
  Push = 'LINES.PUSH',
}
/** END ENUMS */

const state: ILinesState = {
  lines: [1, 2, 3],
};

const mutations = {
  [LinesCommits.Push]: (_state: ILinesState) => {
    _state.lines.push(2);
  },
};

const actions = {
};

export const linesModule = {
  state,
  mutations,
  actions,
};
