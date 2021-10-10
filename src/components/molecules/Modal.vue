<template>
  <div class="modal">
    <div class="modal__times_close" @click="hiddeModal">
      <v-icon color="white" large>close</v-icon>
    </div>
    <div class="modal__blur_background"></div>
    <div class="modal__content_centered">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    document.querySelector("html").style.overflow = "hidden";
  },
  destroyed() {
    document.querySelector("html").removeAttribute("style");
  },
  methods: {
    hiddeModal() {
      this.$emit("hiddeModal");
    },
  },
};
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &__times_close {
    position: absolute;
    z-index: 1;
    right: 25px;
    top: 10px;
    cursor: pointer;
  }
  &__blur_background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(3px);
  }
  &__content_centered {
    position: relative;
    width: auto;
  }
}
</style>
