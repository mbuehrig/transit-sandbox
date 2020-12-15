<template>
  <div
    ref="root"
    :class="['map-station', `map-station--${shape}`]"
    :style="[`--primary: ${colors.primary}`, `--secondary: ${colors.secondary}`]">
    <span class="map-station__name" v-if="label">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import mapboxgl from 'mapbox-gl';

export default {
  props: {
    shape: {
      type: String,
      required: true,
    },
    colors: {
      type: Object,
      required: true,
    },
    lngLat: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
    },
  },
  components: {},
  setup(props) {
    const root = ref<HTMLDivElement>();
    const store = useStore();
    const map = computed<mapboxgl.Map>(() => store.state.map.map);
    let marker: mapboxgl.Marker;

    onMounted(() => {
      marker = new mapboxgl.Marker(root.value);

      marker.setLngLat([props.lngLat.lng, props.lngLat.lat]).addTo(map.value);
    });

    return {
      props,
      root,
    };
  },
};
</script>

<style lang="scss">
  .map-station {
    height: var(--sizeMarker);
    width: var(--sizeMarker);

    position: absolute;

    &:after {
      content: ' ';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      background: var(--primary);
      border: 4px solid var(--secondary);
      box-shadow: $boxShadowBig;
    }

    &--circle:after{
      border-radius: 100%;
    }

    &--diamond:after{
      transform-origin: center center;
      transform: rotate(45deg);
    }
  }

  .map-station__name {
    position: absolute;
    top: 50%;
    display: block;
    left: calc(100% + var(--spaceSmall));
    width: max-content;

    transform: translateY(-50%);
    color: $colorWhite;
    font-size: var(--sizeFontMedium);
    text-shadow: 2px 2px 10px rgba($colorBlack, 0.9);
  }
</style>
