<template>
  <div
    :class="['line-logo', symbolClass]"
    :style="[
      `--primaryColor: ${props.primaryColor}`,
      `--secondaryColor: ${props.secondaryColor}`,
    ]"
  >
    <fit-text className="line-logo__uid" :text="lineUid"></fit-text>
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
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 0;
  right: 16px;

  color: var(--secondaryColor);
  display: flex;
  align-items: center;
  justify-content: center;

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
  }
}

.line-logo__uid {
  position: relative;
  z-index: 1;
  font-size: 100px;
  line-height: 1;
}

.line-logo--round:after {
  border-radius: 100%;
}

.line-logo--diamond:after {
  transform: rotate(45deg) scale(0.7);
}

</style>
