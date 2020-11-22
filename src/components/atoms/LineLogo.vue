<template>
  <div
    :class="['line-logo', symbolClass]"
    :style="[
      `--primaryColor: ${props.primaryColor}`,
      `--secondaryColor: ${props.secondaryColor}`,
      `--size: var(--${size})`,
    ]"
  >
    <fit-text :text="lineUid"/>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import FitText from '../helpers/FitText.vue';

export default {
  props: {
    lineUid: String,
    mode: Number,
    primaryColor: String,
    secondaryColor: String,
    size: {
      type: String,
      default: 'sizeLogoDefault',
    },
  },
  components: {
    FitText,
  },
  setup(props) {
    const symbolClass = computed(() => {
      switch (props.mode) {
        case 1:
          return 'line-logo--diamond';
        case 3:
          return 'line-logo--round';
        default:
          return '';
      }
    });

    return {
      props,
      symbolClass,
    };
  },
};
</script>

<style lang="scss">
.line-logo {

  width: var(--size);
  height: var(--size);

  color: var(--secondaryColor);
  position: relative;

  box-sizing: border-box;

  &:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: var(--primaryColor);
    border: 6px solid var(--secondaryColor);
    z-index: -1;
  }

  span {
    line-height: var(--size);
  }
}

.line-logo--round {
  padding: 0 7.5%;
  &:after {
    border-radius: 100%;
  }
}

.line-logo--diamond {
  padding: 0 13.75%;
  &:after {
    transform: rotate(45deg) scale(0.8);
  }
}

</style>
