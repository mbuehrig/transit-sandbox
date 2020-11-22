<template>
  <div class="modal">
    <div class="modal__popup">
      <div class="modal__content">
        <slot name="content"></slot>
      </div>
      <div class="modal__foot">
        <slot name="foot"></slot>
      </div>
    </div>
  </div>
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
.modal {
  position: fixed;
  background: rgba($colorBlack, 0.75);

  top: 0;
  height: 100vh;
  left: 0;
  right: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__popup {
  width: 50%;
}

.modal__content {
  margin-bottom: var(--spaceRegular);
}

.modal__foot {
  display: flex;
  justify-content: flex-end;
}
</style>
