<template>
  <div id="map" ref="root"></div>
  <map-line-drawer v-if="hasMap && isActiveEditor"></map-line-drawer>
</template>

<script lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useStore } from 'vuex';

import { MapDispatches } from '../store/map';
import MapLineDrawer from './map/mapLineDrawer.vue';

export default {
  components: {
    MapLineDrawer,
  },
  setup() {
    const store = useStore();
    const lines = computed(() => store.state.lines.lines);
    const root = ref(null);
    const hasMap = computed(() => store.state.map.map);
    const isActiveEditor = computed(() => store.state.ui.editor.active);

    onMounted(() => {
      store.dispatch(MapDispatches.Init, root.value);
    });

    return {
      lines,
      root,
      hasMap,
      isActiveEditor,
    };
  },
};
</script>

<style lang="scss">
  #map {
    width: 100vw;
    height: 100vh;
  }
</style>
