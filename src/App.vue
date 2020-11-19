<template>
  <uI/>
  <map-view/>
</template>

<script lang="ts">
import MapView from './components/views/Map.vue';
import UI from './components/views/UI.vue';

export default {
  components: {
    MapView,
    UI,
  },
};
</script>
