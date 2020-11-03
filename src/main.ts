import { createApp } from 'vue';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

import App from './App.vue';
import store from './store';

createApp(App).use(store).mount('#app');
