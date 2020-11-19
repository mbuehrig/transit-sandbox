<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName" :style="[`fill: ${fill}`]"></use>
  </svg>
</template>
<script lang="ts">
import { computed } from 'vue';

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('../../assets/icon', false, /\.svg$/);
requireAll(req);

export default {
  props: {
    icon: String,
    fill: {
      type: String,
      default: '#FFF',
    },
  },
  components: {},
  setup(props) {
    const iconName = computed(() => `#i-${props.icon}`);
    return {
      iconName,
    };
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: var(--sizeIconDefault);
  height: var(--sizeIconDefault);
}
</style>
