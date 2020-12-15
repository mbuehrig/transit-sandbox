<template>
  <div class="map-line-drawer">
    <map-station
      v-for="(station, index) in stations"
      :key="index"
      :colors="colors"
      :shape="shape"
      :lngLat="station.lngLat"
      :label="station.stationName"
    />
  </div>
  <modal v-if="showModal">
    <template v-slot:content>
      <big-text-input v-model="tmpPoint.stationName" id="tmp-station-name" label="station name" />
    </template>
    <template v-slot:foot>
      <btn color="RedCancel" icon="close" label="cancel" sizeClass="small"
        @click="closeModal"/>
      <btn color="GreenConfirm" icon="check" label="save" sizeClass="small"
        @click="saveModal"/>
    </template>
  </modal>
</template>

<script lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

import { IStation } from '../../interfaces/shared';
import { EditorDispatches } from '../../store/editor';
import Modal from '../molecules/Modal.vue';
import BigTextInput from '../atoms/BigTextInput.vue';
import Btn from '../atoms/Btn.vue';
import MapStation from './MapStation.vue';
import { Shape2Mode } from '../../const/index';

export default {
  props: {},
  components: {
    Modal,
    BigTextInput,
    Btn,
    MapStation,
  },
  setup() {
    const store = useStore();
    const { map } = store.state.map;
    const tmpPoint = ref<IStation>({
      lngLat: {
        lng: 0,
        lat: 0,
      },
      stationName: '',
      id: '',
    });
    const showModal = ref<boolean>(false);
    const stations = computed(() => store.state.editor.stations);
    const colors = computed(() => store.state.editor.colors);
    const shape = computed(() => Shape2Mode[store.state.ui.editor.mode]);

    const initEventListeners = () => {
      map.on('click', (event) => {
        tmpPoint.value.lngLat = event.lngLat;

        showModal.value = true;
      });
    };

    const closeModal = () => {
      tmpPoint.value.stationName = '';

      showModal.value = false;
    };

    const saveModal = () => {
      tmpPoint.value.id = window.unique.id();
      store.dispatch(EditorDispatches.AddStationAndGetRoute,
        {
          station: JSON.parse(JSON.stringify(tmpPoint.value)),
          colors,
        });
      closeModal();
    };

    onMounted(() => {
      initEventListeners();
    });

    return {
      tmpPoint,
      closeModal,
      saveModal,
      showModal,
      stations,
      colors,
      shape,
    };
  },
};
</script>
