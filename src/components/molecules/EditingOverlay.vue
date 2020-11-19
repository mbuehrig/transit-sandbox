<template>
  <div
    class="ui-overlay"
    :style="[`--labelBackground: ${uiEditor.colorHex}`]"
  >
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
}
</style>
