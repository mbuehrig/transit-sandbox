<template>
  <div
    class="big-text-input"
  >
    <label
      class="big-text-input__label"
      :for="id">
      {{label}}
    </label>
    <input
      :id="id"
      :value="modelValue"
      class="big-text-input__input"
      @input="$emit('update:modelValue', $event.target.value);"
    >
  </div>
</template>

<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: String,
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
  .big-text-input {
    display: flex;
    flex-direction: column;
  }

  .big-text-input__label {
    font-size: var(--sizeFontBiggerMedium);
    color: $colorWhite;
    padding-bottom: var(--sizeMini);
    font-weight: 600;
  }

  .big-text-input__input {
    height: var(--sizeInputHeightBig);
    font-size: var(--sizeFontBiggerMedium);
    padding-left: var(--spaceRegular);

    box-shadow: $boxShadowBigSoft;

    &:focus {
      box-shadow: $boxShadowBig;
    }
  }
</style>
