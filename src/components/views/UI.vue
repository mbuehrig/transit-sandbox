<template>
  <div class="ui">
    <add-bar/>
    <editing-overlay v-if="editorIsActive"/>
    <editor/>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

import AddBar from '../molecules/AddBar';
import EditingOverlay from '../molecules/EditingOverlay';
import Editor from '../organisms/Editor';

export default {
  components: {
    AddBar,
    EditingOverlay,
    Editor,
  },
  setup() {
    const store = useStore();
    const editorIsActive = computed<boolean>(() => store.state.ui.editor.active);

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
