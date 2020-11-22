import { createApp } from 'vue';
import { SaUniqueId, SaUniqueIdInterfaceStatic } from 'sa-unique-id';

import 'mapbox-gl/dist/mapbox-gl.css';
import '@simonwep/pickr/dist/themes/nano.min.css';
import 'normalize.css/normalize.css';

import './assets/scss/main.scss';

import App from './App.vue';
import store from './store';

import Layerer from './globalHelpers/Layerer';

declare global {
  interface Window {
    M: any; //eslint-disable-line
    Layerer: Layerer; //eslint-disable-line
    unique: SaUniqueIdInterfaceStatic;
  }
}

window.M = window.M || {};
window.unique = SaUniqueId;

createApp(App).use(store).mount('#app');
