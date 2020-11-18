<template>
  <div class="modal" ref="modal">
    <div class="modal-content">
      <div class="input-field">
        <input v-model="tmpPoint.stationName" id="stationName" type="text">
        <label for="stationName">Station name</label>
      </div>
    </div>
    <div class="modal-footer">
      <button @click="closeModal" class="btn waves-effect red lighten-2">
        cancel
        <i class="material-icons right">cancel</i>
      </button>
      <button @click="saveModal" class="btn waves-effect green">
        save
        <i class="material-icons right">save</i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, unref } from 'vue';
import { useStore } from 'vuex';

import { EditorCommits } from '../../store/editor';

export default {
  props: {},
  components: {},
  setup() {
    const store = useStore();
    const { map } = store.state.map;
    const tmpPoint = ref({
      lngLat: {
        lng: 0,
        lat: 0,
      },
      stationName: '',
    });
    const modal = ref(null);
    let modalInstance;

    const initEventListeners = () => {
      map.on('click', (event) => {
        tmpPoint.value.lngLat = event.lngLat;

        modalInstance.open();
      });
    };

    const closeModal = () => {
      modalInstance.close();
    };

    const saveModal = () => {
      closeModal();

      store.commit(EditorCommits.AddStation, unref(tmpPoint));
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

<style lang="scss">
  .btn {
    margin-left: 1em !important;
  }
</style>
