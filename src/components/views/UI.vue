<template>
  <div class="ui">
    <ui-fab></ui-fab>
    <ui-overlay v-if="editorIsActive"></ui-overlay>
    <ui-editor></ui-editor>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

import uiFab from './ui/uiFab.vue';
import uiOverlay from './ui/uiOverlay.vue';
import uiEditor from './ui/uiEditor.vue';

export default {
  props: {},
  components: {
    uiFab,
    uiOverlay,
    uiEditor,
  },
  setup() {
    const store = useStore();
    const editorIsActive = computed(() => store.state.ui.editor.active);

    return {
      editorIsActive,
    };
  },
};
</script>

<style lang="scss">
  .ui {
    z-index: 5;
    position: relative;
  }
</style>
