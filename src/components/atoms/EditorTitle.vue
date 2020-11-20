<template>
  <h2 class="editor-title">{{ title }}</h2>
</template>

<script lang="ts">
export default {
  props: {},
  components: {},
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style lang="scss">
.editor-title {
  font-size: $sizeFontBig;
  line-height: 1.2;

  padding-top: $spaceMini;
}
</style>
