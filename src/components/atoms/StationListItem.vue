<template>
  <li
    :class="['station-list-item', `station-list-item--${shape}`]"
    :style="[`--primary: ${colors.primary}`, `--secondary: ${colors.secondary}`]">
    <span class="station-list-item__knob"></span>
    <span class="station-list-item__label">{{label}}</span>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    shape: {
      type: String,
      required: true,
    },
    colors: {
      type: Object,
      required: true,
    },
  },
  components: {},
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style lang="scss">

.station-list-item {
  display: flex;

  align-items: center;

  &--circle .station-list-item__knob {
    &:after {
      border-radius: 100%;
    }
  }
}

.station-list-item__knob {
  width: $sizeKnob;
  height: $sizeKnob;

  margin-right: var(--spaceRegular);

  display: block;
  position: relative;
  box-sizing: border-box;

  &:after {
    position: absolute;
    display: block;
    content: ' ';
    width: 100%;
    height: 100%;

    background: var(--primary);
    border: 3px solid var(--secondary);
    box-sizing: border-box;
  }
}

.station-list-item__label {
  font-size: var(--sizeFontMedium);
  color: $colorWhite;
  text-shadow: 2px 2px 10px rgba($colorBlack, 0.9);

  transform: skewY(-10deg) translateY(-2px);
  transform-origin: left center;
}
</style>
