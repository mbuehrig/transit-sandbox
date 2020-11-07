<template>
  <span :class="[props.className]">{{props.text}}</span>
</template>

<script lang="ts">
import { onMounted, watch } from 'vue';

export default {
  props: {
    text: String,
    className: String,
  },
  components: {},
  setup(props) {
    return {
      props,
    };
  },
};
</script>
