<template>
  <span
    ref="root"
  >
    {{props.text}}
  </span>
</template>

<script lang="ts">
import { ref, onMounted, onUpdated } from 'vue';

export default {
  props: {
    text: String,
    className: String,
    unit: {
      type: String,
      default: 'rem',
    },
    max: {
      type: Number,
      default: 4.4,
    },
    min: {
      type: Number,
      default: 1,
    },
  },
  components: {},
  setup(props) {
    const root = ref<HTMLSpanElement|any>();

    const calculate = () => {
      const parentHeight = root.value.parentElement.offsetHeight;

      // first make it an inline block and set the line height to a fixed pixel value
      root.value.style.lineHeight = `${parentHeight}px`;
      // then keep trying untill it fits
      let fontSize = props.max;
      const stepSize = (props.unit === 'px') ? 1 : 0.05;
      root.value.style.fontSize = fontSize + props.unit;

      while (root.value.offsetHeight > parentHeight && fontSize > props.min) {
        // console.log('test', stepSize);
        fontSize -= stepSize;
        // console.log('test', fontSize);
        root.value.style.fontSize = fontSize + props.unit;
      }
      // found it!!
      // reset the styles
      root.value.style.display = null;
      root.value.style.lineHeight = null;
    };

    // watch(() => props.text, calculate);

    onUpdated(() => {
      calculate();
    });

    onMounted(() => {
      calculate();
    });

    return {
      props,
      root,
    };
  },
};
</script>

<style lang="scss" scoped>
span {
  text-align: center;
  width: 100%;
  min-height: 100%;
  word-break: break-all;
  display: block;
}
</style>
