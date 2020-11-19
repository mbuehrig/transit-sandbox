<template>
  <div
    class="ui-overlay"
    :style="[`--editorColor: ${uiEditor.color}`]"
  >
    <span
      class="ui-overlay__label"
      :style="[`--editorColor: ${uiEditor.color}`]"
    >Creating Line</span>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';

export default {
  props: {},
  components: {},
  setup() {
    const store = useStore();
    const uiEditor = store.state.ui.editor;

    return {
      uiEditor,
    };
  },
};
</script>

<style lang="scss">
.ui-overlay {
  pointer-events: none;
  position: fixed;

  height: 100vh;
  width: calc(100vw - 400px);

  display: flex;
  justify-content: center;
  align-items: flex-start;

  box-shadow: inset 0 0 0 3px var(--editorColor);

  &__label {
    padding: 0.2rem 1rem;

    text-transform: uppercase;

    background-color: var(--editorColor);
    color: white;
  }
}
</style>
