<template>
  <div class="fixed-action-btn" ref="root">
    <a class="btn-floating btn-large black waves-effect waves-light">
      <i class="large material-icons">add</i>
    </a>
    <ul>
      <li v-for="(actionButton) in actionButtons" :key="actionButton.id">
        <a
          :class="['btn-floating', actionButton.color, 'waves-effect', 'tooltiped']"
          data-position="left"
          :data-tooltip="actionButton.label"
          :ref="el => { rActionButtons.push(el) }"
          @click="setEditor(actionButton.mode, actionButton.colorHex)"
        >
          <i class="material-icons">{{actionButton.icon}}</i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

import { UIDispatches } from '../../store/ui';

export default {
  props: {},
  components: {},
  setup() {
    const root = ref<HTMLDivElement|null>(null);
    const store = useStore();
    const actionButtons = computed(() => store.state.ui.actionButtons);
    const rActionButtons = ref<HTMLAnchorElement[]>([]);

    onMounted(() => {
      window.M.FloatingActionButton.init(root.value, {});

      rActionButtons.value.forEach((actionButton) => {
        window.M.Tooltip.init(actionButton, {});
      });
    });

    const setEditor = (mode: number, color: string) => {
      store.dispatch(UIDispatches.SetEditorActive, {
        mode,
        color,
        active: true,
      });

      console.log(store);
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
