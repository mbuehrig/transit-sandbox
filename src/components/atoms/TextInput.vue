<template>
  <div
    :class="['text-input',
      isDirty ? 'text-input--dirty' : '',
      isFilled ? 'text-input--filled' : '']"
    :style="[`--paddingLeft: var(--${leftPadding})`]">
    <label
      class="text-input__label"
      :for="id">
      {{label}}
    </label>
    <input
      :id="id"
      :value="modelValue"
      class="text-input__input"
      @focus="isDirty = true"
      @blur="checkIfFilled"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  props: {
    modelValue: String,
    label: String,
    id: String,
    leftPadding: {
      type: String,
      default: 'spaceSmall',
    },
  },
  components: {},
  setup(props: any) {
    const isDirty = ref<boolean>(false);
    const isFilled = ref<boolean>(false);

    const checkIfFilled = () => {
      console.log(props.modelValue.length);
      if (props.modelValue.length > 0) {
        isFilled.value = true;
      }

      isDirty.value = false;
    };

    return {
      props,
      isDirty,
      isFilled,
      checkIfFilled,
    };
  },
};
</script>

<style lang="scss">
.text-input {
  position: relative;
}

.text-input--dirty,
.text-input--filled {
  .text-input__label {
    top: 0;
    font-size: var(--sizeFontSmall);

    color: $colorWhite;
  }
}

.text-input__label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  font-size: var(--sizeFontMedium);
  padding-left: var(--paddingLeft);

  color: rgba($colorWhite, 0.667);
}

.text-input__input {
  box-sizing: border-box;
  height: var(--sizeInputHeightDefault);
  width: 100%;

  background: rgba($colorWhite, 0.15);
  color: $colorWhite;
  font-size: var(--sizeFontMedium);
  padding-left: var(--paddingLeft);
}
</style>
