<template>
  <h2
  :class="['section-title', hasLine ? 'section-title--lined' : '']"
  :style="[`--primary: ${color}`]">{{title}}</h2>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    hasLine: {
      type: Boolean,
      default: false,
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
.section-title {
  margin: 0;
  padding-left: var(--spaceSmall);
  margin-bottom: var(--spaceRegular);

  position: relative;
  color: $colorWhite;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 45px 45px 0 0;
    border-color: var(--primary) transparent transparent transparent;
    transform: translateY(-25%);
    z-index: -1;
  }
}

.section-title--lined {
  padding-bottom: var(--spaceLarge);

    &:after {
      position: absolute;
      display: block;
      content: ' ';
      height: 2px * 10;
      width: 100%;

      background: rgb(255,255,255);
      background: linear-gradient(180deg,
        rgba(255,255,255,1) 0%,
        rgba(255,255,255,1) 10%,
        rgba(0,0,0,0.25)
        11%, rgba(0,0,0,0) 100%);

      transform: rotate(-10deg) scale(1.12);
      transform-origin: center center;
      backface-visibility: hidden;

      right: 0;
      bottom: 0;
    }
  }
</style>
