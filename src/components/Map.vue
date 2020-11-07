<template>
  <div id="map" ref="root"></div>
</template>

<script lang="ts">
import { onMounted, computed, watch, ref } from 'vue';
import { useStore } from 'vuex';

import { MapDispatches } from '../store/map';

export default {
  setup() {
    const store = useStore();
    const lines = computed(() => store.state.lines.lines);
    const root = ref(null);

    onMounted(() => {
      store.dispatch(MapDispatches.Init, root.value);
    });

    return {
      lines,
      root,
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
