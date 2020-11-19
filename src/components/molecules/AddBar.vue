<template>
  <div class="add-bar" ref="root">
    <btn icon="plus" label="Add line"/>
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

    const setEditor = (mode: number, color: string) => {
      store.dispatch(UIDispatches.SetEditorActive, {
        mode,
        color,
        active: true,
      });
    };

    return {
      root,
      actionButtons,
      rActionButtons,
      setEditor,
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
</style>
