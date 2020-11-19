<template>
  <div :class="['ui-editor', isActive ? 'ui-editor--visible' : '']">
    <line-meta-editor/>
    <station-list :stations="stations"/>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

import LineMetaEditor from '../molecules/LineMetaEditor.vue';
import StationList from '../molecules/StationList.vue';

export default {
  props: {},
  components: {
    LineMetaEditor,
    StationList,
  },
  setup() {
    const store = useStore();
    const isActive = computed(() => store.state.ui.editor.active);

    return {
      isActive,
      stations: store.state.editor.stations,
    };
  },
};
</script>

<style lang="scss">
.ui-editor {
  position: fixed;
  width: 400px;

  height: 100vh;
  right: 0;

  z-index: 1000;
  background: rgb(240, 240, 240);

  transform: translateX(100%);

  &--visible {
    transform: translateX(0);
  }
}
</style>
