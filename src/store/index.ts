import { createStore, createLogger } from 'vuex';

import { linesModule } from './lines';
import { mapModule } from './map';

const store = createStore({
  plugins: [createLogger()],
});

store.registerModule('lines', linesModule);
store.registerModule('map', mapModule);

export default store;
