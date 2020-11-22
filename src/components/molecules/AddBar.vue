<template>
  <div class="add-bar" ref="root" :style="isHidden ? 'transform: translateX(100%);' : ''">
    <btn icon="plus" label="Add line" color="Black"/>
    <ul class="add-bar__functions">
      <li v-for="(actBtn) in actionButtons" :key="actBtn.id">
        <btn
          @click="setEditor(actBtn.mode, actBtn.color, actBtn.defaultColor)"
          :icon="actBtn.icon"
          :label="actBtn.label"
          :color="actBtn.color"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

import { UIDispatches } from '../../store/ui';
import Btn from '../atoms/Btn.vue';

export default {
  props: {},
  components: {
    Btn,
  },
  setup() {
    const root = ref<HTMLDivElement|null>(null);
    const store = useStore();
    const actionButtons = computed(() => store.state.ui.actionButtons);
    const rActionButtons = ref<HTMLAnchorElement[]>([]);
    const isHidden = computed(() => store.state.ui.editor.active);

    const setEditor = (mode: number, color: string, colorHex: string) => {
      store.dispatch(UIDispatches.SetEditorActive, {
        mode,
        color,
        active: true,
        colorHex,
      });
    };

    return {
      root,
      actionButtons,
      rActionButtons,
      setEditor,
      isHidden,
    };
  },
};
</script>

<style lang="scss">
  .add-bar {
    position: fixed;
    bottom: 0;
    right: 0;
  }

  .add-bar:hover {
    .add-bar__functions {
      right: var(--sizeButtonDefault);
      transform: translateX(0);
    }
  }

  .add-bar__functions {
    position: fixed;

    bottom: 0;
    right: 0;

    transform: translateX(100%);

    display: flex;
  }
</style>
