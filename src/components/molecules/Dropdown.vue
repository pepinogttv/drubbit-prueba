<template>
  <div class="dropdown">
    <div
      class="dropdown__blur_background"
      ref="blur_background"
      @click="closeDropdown"
    ></div>
    <div
      class="dropdown__content pa-4"
      ref="content"
      :class="{
        opening_from_right: openingAnimationFrom === 'right',
        opening_from_left: openingAnimationFrom === 'left',
      }"
    >
      <v-btn
        fab
        small
        color="primary"
        class="close-button"
        @click="closeDropdown"
      >
        <v-icon>close</v-icon>
      </v-btn>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openingAnimationFrom: String,
  },
  mounted() {
    setTimeout(() => {
      this.$refs.content.style.transform = "none";
    }, 100);
    document.querySelector("html").style.overflow = "hidden";
  },
  destroyed() {
    document.querySelector("html").removeAttribute("style");
  },
  methods: {
    closeDropdown() {
      this.$refs.content.style.transform =
        this.openingAnimationFrom === "left"
          ? "translateX(-100%)"
          : "translateX(100%)";
      this.$refs.blur_background.style.animation =
        "noOpacity .4s ease forwards";
      setTimeout(() => {
        this.$emit("closeDropdown");
      }, 400);
    },
  },
};
</script>

<style lang="scss">
.dropdown {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  &__blur_background {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(3px);
    animation: opacity 0.4s ease forwards;
  }
  &__content {
    position: relative;
    width: 100%;
    background-color: white;
    transition: all 0.4s;
    height: 100%;
    @media screen and (min-width: 768px) {
      width: 70%;
    }
    @media screen and (min-width: 1200px) {
      width: 50%;
    }
    &.opening_from_left {
      transform: translateX(-100%);
      .close-button {
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
    &.opening_from_right {
      float: right;
      transform: translateX(100%);
      .close-button {
        position: absolute;
        right: 25px;
        top: 10px;
      }
    }
  }
}
@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 10;
  }
}
@keyframes noOpacity {
  from {
    opacity: 10;
  }
  to {
    opacity: 0;
  }
}
</style>
