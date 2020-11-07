import { createStore } from 'vuex';

import { linesModule } from './lines';
import { mapModule } from './map';
import { uiModule } from './ui';
import { editorModule } from './editor';

const store = createStore({
  plugins: [],
});

store.registerModule('lines', linesModule);
store.registerModule('map', mapModule);
store.registerModule('ui', uiModule);
store.registerModule('editor', editorModule);

export default store;
