<template>
  <div
    :class="['text-input',
      isDirty ? 'text-input--dirty' : '',
      isFilled ? 'text-input--filled' : '',
      isForcedFilled ? 'text-input--filled' : '']"
    :style="[
      `--paddingLeft: var(--${leftPadding})`,
      `--primary: ${primaryColor}`,
      `--secondary: ${secondaryColor}`]"
  >
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
      @input="$emit('update:modelValue', $event.target.value);"
    >
  </div>
</template>

<script lang="ts">
import { onMounted, ref, computed, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    modelValue: String,
    label: String,
    id: String,
    leftPadding: {
      type: String,
      default: 'spaceSmall',
    },
    isForcedFilled: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  setup(props: any, { emit }) {
    const store = useStore();
    const primaryColor = computed(() => store.state.editor.colors.primary);
    const secondaryColor = computed(() => store.state.editor.colors.secondary);
    const isDirty = ref<boolean>(false);
    const isFilled = ref<boolean>(false);

    const checkIfFilled = () => {
      if (props.modelValue.length > 0) {
        isFilled.value = true;
      } else {
        isFilled.value = false;
      }

      isDirty.value = false;
    };

    watch(isDirty, () => {
      emit('focused', isDirty);
    });

    onMounted(() => {
      checkIfFilled();
    });

    return {
      props,
      primaryColor,
      secondaryColor,
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

  margin-bottom: var(--spaceRegular);
}

.text-input--dirty,
.text-input--filled {
  .text-input__label {
    top: 0;
    font-size: var(--sizeFontSmall);

    color: var(--secondary);
    background: var(--primary);

    &:after {
      display: block;
    }
  }
}

.text-input--dirty {
  box-shadow: $boxShadowDefault;

  .text-input__input {
    background-color: $colorWhite;
    color: $colorBlack;
  }
}

.text-input__label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;

  font-size: var(--sizeFontMedium);
  padding-left: var(--paddingLeft);
  padding-top: var(--spaceTiny);
  padding-bottom: var(--spaceTiny);
  padding-right: var(--spaceSmall);

  color: $colorBlack;

  z-index: 2;

  &:after {
    position: absolute;
    display: none;
    content: ' ';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 17px 7px 0 0;
    border-color: var(--primary) transparent transparent transparent;

    left: 100%;
    top: 0;
  }
}

.text-input__input {
  box-sizing: border-box;
  height: var(--sizeInputHeightDefault);
  width: 100%;

  background: rgba($colorWhite, 0.5);
  color: $colorBlack;
  font-size: var(--sizeFontMedium);
  padding-left: var(--paddingLeft);
}
</style>
