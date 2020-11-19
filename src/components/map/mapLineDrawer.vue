<template>
  <div class="modal" ref="modal">
    <div class="modal-content">
      <div class="input-field">
        <input v-model="tmpPoint.stationName" id="stationName" type="text">
        <label for="stationName">Station name</label>
      </div>
    </div>
    <div class="modal-footer">
      <a @click="closeModal" class="btn-flat waves-effect red lighten-2">
        cancel
        <i class="material-icons right">cancel</i>
      </a>
      <a @click="saveModal" class="btn waves-effect green">
        save
        <i class="material-icons right">save</i>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

import { IStation } from '../../interfaces/shared';
import { EditorCommits } from '../../store/editor';
import { Shape2Mode } from '../../const/index';

export default {
  props: {},
  components: {},
  setup() {
    const store = useStore();
    const { map } = store.state.map;
    const tmpPoint = ref<IStation>({
      lngLat: {
        lng: 0,
        lat: 0,
      },
      stationName: '',
    });
    const modal = ref<HTMLDivElement|null>(null);
    let modalInstance;

    const initEventListeners = () => {
      map.on('click', (event) => {
        tmpPoint.value.lngLat = event.lngLat;

        modalInstance.open();
      });
    };

    const closeModal = () => {
      modalInstance.close();

      tmpPoint.value.stationName = '';
    };

    const saveModal = () => {
      store.commit(EditorCommits.AddStation, JSON.parse(JSON.stringify(tmpPoint.value)));

      window.Layerer.addStationOnMap(
        tmpPoint.value,
        store.state.editor.colors,
        Shape2Mode[store.state.editor.mode],
      );

      closeModal();
    };

    onMounted(() => {
      initEventListeners();

      modalInstance = window.M.Modal.init(modal.value);
    });

    return {
      tmpPoint,
      modal,
      closeModal,
      saveModal,
    };
  },
};
</script>
