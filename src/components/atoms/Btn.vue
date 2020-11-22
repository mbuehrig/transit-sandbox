<template>
  <button :class="['btn', `btn--${sizeClass}`]" type="button" :style="
    [`--primary: var(--color${color})`, `--primaryHover: var(--color${color}Hover)`]
  ">
    <svg-icon :icon="icon"/>
    <span class="btn-label">{{ label }}</span>
  </button>
</template>

<script lang="ts">
import SvgIcon from './SvgIcon.vue';

export default {
  props: {
    icon: String,
    label: String,
    color: String,
    sizeClass: {
      type: String,
      default: '',
    },
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
    margin: 0;

    border: none;
    width: var(--sizeButtonDefault);
    height: var(--sizeButtonDefault);
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    background: var(--primary);
    border-radius: 0;

    &--small {
      width: var(--sizeButtonSmall);
      height: var(--sizeButtonSmall);
    }
  }

  .btn:hover {
    background: var(--primaryHover);

    .btn-label {
      bottom: 100%;
      transform: translateY(0);
      background: var(--primaryHover);
      color: var(--colorWhite);

      opacity: 1;
    }
  }

  .btn-label {
    position: absolute;

    bottom: 0;
    text-transform: uppercase;
    cursor: pointer;

    opacity: 0;

    left: 0;
    right: 0;
    text-align: center;

    transform: translateY(100%);

    padding: var(--spaceTiny) 0;

    font-size: var(--sizeFontSmall);
  }
</style>
