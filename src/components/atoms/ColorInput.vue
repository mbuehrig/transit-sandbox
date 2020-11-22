<template>
  <div class="color-input"
  ref="root" :style="[`--colorFieldValue: ${colorFieldValue}`]">
    <text-input
      v-on:focused="focused"
      v-model="colorFieldValue"
      :id="id" :label="label"
      :isForcedFilled="true"/>
    <div v-show="pickerVisible"  class="color-input__picker" ref="colorPickerEl"></div>
  </div>
</template>

<script lang="ts">
import { ref, watch, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import iro from '@jaames/iro';

import TextInput from './TextInput.vue';

export default {
  props: {
    modelValue: {
      type: String,
      default: '#FFF',
    },
    color: String,
    id: String,
    label: String,
  },
  components: {
    TextInput,
  },
  setup(props, { emit }) {
    const store = useStore();
    const primaryColor = computed(() => store.state.editor.colors.primary);
    const colorFieldValue = ref<string>(props.modelValue);
    const colorPickerEl = ref<HTMLElement|string>('');
    let colorPicker: iro.ColorPicker|any = null;
    const root = ref<HTMLDivElement|any>();
    const pickerVisible = ref<boolean>(false);

    watch(colorFieldValue, () => {
      emit('update:modelValue', colorFieldValue.value);
    });

    watch(primaryColor, () => {
      console.log('primaryColor changed');
    });

    watch(() => props.modelValue, () => {
      colorFieldValue.value = props.modelValue;

      colorPicker.color.hexString = props.modelValue;
    });

    onMounted(() => {
      colorPicker = iro.ColorPicker(colorPickerEl.value, {
        width: root.value.offsetWidth,
        color: props.modelValue,
      });

      colorPicker.on('color:change', (color) => {
        colorFieldValue.value = color.hexString;
      });
    });

    const focused = (isDirty) => {
      pickerVisible.value = isDirty.value;
    };

    return {
      colorFieldValue,
      colorPickerEl,
      primaryColor,
      root,
      focused,
      pickerVisible,
    };
  },
};
</script>

<style lang="scss">
  .color-input {
    position: relative;

    &:after {
      position: absolute;
      top: 0;
      right: 0;
      content: ' ';

      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 var(--sizeInputHeightDefault) var(--sizeInputHeightDefault) 0;
      border-color: transparent var(--colorFieldValue) transparent transparent;
    }
  }

  .color-input__picker {
    position: absolute;
    top: calc(100% + var(--spaceMini));
    right: 0;

    box-sizing: border-box;
    padding: var(--spaceMini);

    background: darken($colorWhite, 1%);

    border-radius: var(--spaceSmall);
    box-shadow: $boxShadowDefault;

    z-index: 10;
  }
</style>
