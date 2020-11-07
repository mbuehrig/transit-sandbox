<template>
  <span
    ref="root"
    :class="[props.className]"
    :style="[`transform: scale(${scale})`]"
  >
    {{props.text}}
  </span>
</template>

<script lang="ts">
import { ref, onMounted, watchEffect, nextTick } from 'vue';

export default {
  props: {
    text: String,
    className: String,
  },
  components: {},
  setup(props) {
    const root: any = ref(null);
    let parentElement: HTMLElement;
    const scale = ref(1);

    watchEffect(() => {
      if (props.text && parentElement) {
        nextTick(() => {
          const rootWidth = root.value.offsetWidth;
          const parentWidth = parentElement.offsetWidth;
          const reducer = (parentWidth / (rootWidth * 1.3));
          const tempScale = Math.max(Math.min(reducer * scale.value, 1), 0.25);

          scale.value = tempScale;
        });
      }
    });

    onMounted(() => {
      parentElement = root.value.parentElement;
    });

    return {
      props,
      root,
      scale,
    };
  },
};
</script>
