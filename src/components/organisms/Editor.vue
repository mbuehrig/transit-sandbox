<template>
  <div :class="['ui-editor', isActive ? 'ui-editor--visible' : '']">
    <section ref="topSection">
      <section-title :color="colors.primary" title="Details"/>
      <line-meta-editor/>
    </section>
    <section :style="`--sizeTop: ${topSectionHeight}`">
      <section-title :hasLine="true" :color="colors.primary" title="Stations"/>
      <station-list :stations="stations" :shape="shape" :colors="colors"/>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

import LineMetaEditor from '../molecules/LineMetaEditor.vue';
import StationList from '../molecules/StationList.vue';
import SectionTitle from '../atoms/SectionTitle.vue';

import { Shape2Mode } from '../../const';

export default {
  props: {},
  components: {
    LineMetaEditor,
    StationList,
    SectionTitle,
  },
  setup() {
    const store = useStore();
    const isActive = computed(() => store.state.ui.editor.active);
    const colors = computed(() => store.state.editor.colors);
    const shape = computed(() => Shape2Mode[store.state.ui.editor.mode]);
    const topSection = ref<HTMLElement|any>();
    const topSectionHeight = ref<number>(250);

    onMounted(() => {
      console.log(topSection.value.offsetHeight);
      topSectionHeight.value = topSection.value.offsetHeight;
    });

    return {
      isActive,
      colors,
      shape,
      stations: store.state.editor.stations,
      topSection,
      topSectionHeight,
    };
  },
};
</script>

<style lang="scss">
.ui-editor {
  position: fixed;
  width: 400px;

  box-sizing: border-box;

  overflow: hidden;

  height: 100vh;
  right: 0;

  z-index: 1000;
  background: rgba($colorBlack, 0.33);

  transform: translateX(100%);
  box-shadow: $boxShadowBig;
  padding: var(--spaceRegular);

  display: flex;
  flex-direction: column;

  &--visible {
    transform: translateX(0);
  }

  section {
    padding-bottom: var(--spaceLarge);

    &:last-child {
      flex-grow: 1;
      padding-bottom: 0;

      height: calc(100vh - var(--sizeTop));
    }
  }
}
</style>
