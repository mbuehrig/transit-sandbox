<template>
  <div class="line-meta-editor">
    <div class="line-meta-editor__top">
      <div class="line-meta-editor__logo">
        <line-logo
          :primaryColor="primaryColor"
          :secondaryColor="secondaryColor"
          :mode="mode"
          :lineUid="lineUid" />
      </div>
      <div class="line-meta-editor__colors">
        <color-input v-model="primaryColor" id="primaryColor" label="primary color"/>
        <color-input v-model="secondaryColor" id="secondaryColor" label="secondary color" />
      </div>
    </div>
    <div class="line-meta-editor__main">
      <text-input v-model="lineUid" id="lineUid" label="Line UID"/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import Picker from '@simonwep/pickr';

import { EditorCommits } from '../../store/editor';
import LineLogo from '../atoms/LineLogo.vue';
import TextInput from '../atoms/TextInput.vue';
import ColorInput from '../atoms/ColorInput.vue';

interface IPickers {
  primary: Picker|null;
  secondary: Picker|null;
}

export default {
  props: {},
  components: {
    LineLogo,
    TextInput,
    ColorInput,
  },
  setup() {
    const store = useStore();
    const lineUid = computed({
      get: () => store.state.editor.lineUid,
      set: (value) => {
        store.commit(EditorCommits.SetUid, value);
      },
    });
    const mode = computed(() => store.state.editor.mode);
    const primaryColor = computed({
      get: () => store.state.editor.colors.primary,
      set: (value) => {
        store.commit(EditorCommits.SetPrimaryColor, value);
      },
    });
    const secondaryColor = computed({
      get: () => store.state.editor.colors.secondary,
      set: (value) => {
        store.commit(EditorCommits.SetSecondaryColor, value);
      },
    });

    return {
      lineUid,
      primaryColor,
      secondaryColor,
      mode,
    };
  },
};
</script>

<style lang="scss">
.line-meta-editor {
  display: flex;
  flex-direction: column;
}

.line-meta-editor__top {
  display: flex;
  margin-bottom: var(--spaceRegular);
}

.line-meta-editor__logo {
  padding-right: var(--spaceSmall);
}

.line-meta-editor__colors {
  flex-grow: 1;
}

</style>
