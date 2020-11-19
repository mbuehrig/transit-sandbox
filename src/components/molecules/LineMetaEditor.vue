<template>
  <div class="ui-editor-head">
    <div class="ui-editor-head__top">
      <div class="ui-editor-head__logo">
        <line-logo
          :primaryColor="primaryColor"
          :secondaryColor="secondaryColor"
          :mode="mode"
          :lineUid="lineUid" />
      </div>
      <div class="ui-editor-head__colors">
        <div class="input-field">
          <input ref="refPrimaryColor" v-model="primaryColor" id="primaryColor" type="text">
          <label for="primaryColor">Primary Color</label>
        </div>
        <div class="input-field">
          <input ref="refSecondaryColor" v-model="secondaryColor" id="secondaryColor" type="text">
          <label for="secondaryColor">Secondary Color</label>
        </div>
      </div>
    </div>
    <div class="ui-editor-head__main">
      <div class="input-field">
        <input v-model="lineUid" id="lineUid" type="text">
        <label for="lineUid">Line ID</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
import Picker from '@simonwep/pickr';

import { EditorCommits } from '../../store/editor';
import LineLogo from '../atoms/LineLogo.vue';

interface IPickers {
  primary: any;
  secondary: any;
}

export default {
  props: {},
  components: {
    LineLogo,
  },
  setup() {
    const store = useStore();
    const refPrimaryColor = ref<HTMLElement|string>('');
    const refSecondaryColor = ref<HTMLElement|string>('');
    const pickers: IPickers = {
      primary: {},
      secondary: {},
    };
    const options: Picker.Options = {
      theme: 'nano',
      useAsButton: true,
      el: '',
      components: {
        preview: true,
        opacity: false,
        hue: true,
      },
    };
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
    let pickersInitialized = false;

    const initPickers = () => {
      pickers.primary = new Picker({ ...options,
        ...{
          el: refPrimaryColor.value,
          default: primaryColor.value },
      });
      pickers.secondary = new Picker({ ...options,
        ...{ el: refSecondaryColor.value, default: secondaryColor.value } });

      pickers.primary.on('changestop', (instance) => {
        primaryColor.value = instance.getColor().toHEXA().toString();
      });
      pickers.secondary.on('changestop', (instance) => {
        secondaryColor.value = instance.getColor().toHEXA().toString();
      });

      pickersInitialized = true;
    };

    onMounted(() => {
      setTimeout(window.M.updateTextFields, 1);
    });

    watch(() => store.state.ui.editor.active, () => {
      if (!pickersInitialized) {
        initPickers();
      }

      setTimeout(window.M.updateTextFields, 1);
    });

    return {
      lineUid,
      refPrimaryColor,
      refSecondaryColor,
      primaryColor,
      secondaryColor,
      mode,
    };
  },
};
</script>

<style lang="scss">
.ui-editor-head {
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
}

.ui-editor-head__top {
  display: flex;
}

.ui-editor-head__colors,
.ui-editor-head__logo {
  flex-basis: 50%;
}

.ui-editor-head__logo {
  position: relative;
  padding-top: 50%;
}
</style>
