<template>
  <div
    class="ui-overlay"
    :style="[`--labelBackground: ${uiEditor.colorHex}`]"
  >
    <overlay-tab :label="tabLabel" :color="uiEditor.color"/>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import OverlayTab from '../atoms/OverlayTab.vue';

export default {
  props: {},
  components: {
    OverlayTab,
  },
  setup() {
    const store = useStore();
    const uiEditor = store.state.ui.editor;
    const tabLabel = computed(() => `Adding line ${store.state.editor.lineUid}`);

    return {
      uiEditor,
      tabLabel,
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
