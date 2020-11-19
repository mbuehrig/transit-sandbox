<template>
  <button class="btn" type="button">
    <svg-icon :icon="icon"/>
    <span>{{ label }}</span>
  </button>
</template>

<script lang="ts">
import SvgIcon from './SvgIcon.vue';

export default {
  props: {
    icon: String,
    label: String,
  },
  components: {
    SvgIcon,
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style lang="scss">
  .btn {
    padding: 0;
    background: white;
    margin: 0;

    border: none;
    width: var(--sizeButtonDefault);
    height: var(--sizeButtonDefault);
  }
</style>
