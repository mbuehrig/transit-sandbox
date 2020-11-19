<template>
  <ul>
    <li v-for="station in stations" :key="station.stationName">
      {{ station.stationName }}
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: {
    stations: Array,
  },
  components: {},
  setup(props) {
    return {
      props,
    };
  },
};
</script>
