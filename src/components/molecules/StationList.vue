<template>
  <div :class="['station-list', stations.length < 2 ? 'station-list--wo-line' : '']" ref="root"
    :style="[
      `--offsetTop: ${offTop}px`,
      `--primary: ${colors.primary}`,
      `--secondary: ${colors.secondary}`]
      ">
    <ul>
      <station-list-item
        v-for="(station, idx) in stations"
        :key="idx"
        :label="station.stationName"
        :shape="shape"
        :colors="colors"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, watch, onMounted } from 'vue';
import StationListItem from '../atoms/StationListItem.vue';

export default {
  props: {
    stations: Array,
    shape: String,
    colors: Object,
  },
  components: {
    StationListItem,
  },
  setup(props) {
    const root = ref<HTMLDivElement|any>();
    const offTop = ref<number>(0);

    const calcOffset = () => {
      const { parentElement, offsetTop } = root.value;

      offTop.value = offsetTop - parentElement.offsetTop;
    };

    watch(root.value, calcOffset);

    onMounted(() => {
      calcOffset();
    });

    return {
      props,
      root,
      offTop,
    };
  },
};
</script>

<style lang="scss">
  .station-list {
    height: calc(100% - var(--offsetTop));

    &.station-list--wo-line {
      ul:before {
        display: none;
      }
    }

    ul {
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: var(--spaceSmall);

      box-sizing: border-box;
      position: relative;

      &:before {
        display: block;
        content: ' ';
        position: absolute;

        width: 12px;
        left: $sizeKnob / 2 - 0.55;

        background: var(--primary);
        border: 2px solid var(--secondary);

        top: var(--spaceRegular);
        bottom: var(--spaceRegular);
      }
    }
  }
</style>
