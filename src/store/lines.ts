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

const defaultState: ILinesState = {
  lines: [1, 2, 3],
};

const mutations = {
  [LinesCommits.Push]: (state: ILinesState) => {
    state.lines.push(2);
  },
};

const actions = {
};

export const linesModule = {
  state: defaultState,
  mutations,
  actions,
};
