<template>
  <div class="overlay-tab" :style="[`--primary: var(--color${color})`]">
    <span>{{ label }}</span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
    color: String,
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
$sizeOverlayTopHeight: convert-to-rem(36);

.overlay-tab {
  height: $sizeOverlayTopHeight;
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 var(--spaceSmall);

  display: flex;
  align-items: center;

  color: $colorWhite;

  &:after {
    position: absolute;
    content: ' ';
    display: block;

    width: 100%;

    transform: skewX(-20deg) translateX(-10px);
    height: 100%;

    background: var(--primary);
    z-index: 1;
    box-shadow: $boxShadowDefault;
  }

  span { z-index: 2; }
}
</style>
