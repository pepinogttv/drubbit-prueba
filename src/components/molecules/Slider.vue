<template>
  <div class="slider" :class="{ fullScreen }">
    <div class="arrow previous" ref="arrowPrevious" @click="previousSlide">
      <v-icon color="primary" :large="!fullScreen" :x-large="fullScreen"
        >navigate_before</v-icon
      >
    </div>
    <div class="arrow next" ref="arrowNext" @click="nextSlide">
      <v-icon color="primary" :large="!fullScreen" :x-large="fullScreen"
        >navigate_next</v-icon
      >
    </div>
    <div class="scrolleable" ref="scrolleable" @scroll="scroleameEsta">
      <div class="scrolleable__slide" v-for="image in images" :key="image">
        <div
          class="scrolleable__slide__center-image d-flex justify-center align-center"
        >
          <img
            :style="
              fullScreen
                ? 'max-height: 95vh; max-width: 90vw;'
                : 'max-height: 500px; max-width: 100%;'
            "
            @click="imagenClickeada"
            :src="image"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../Slider.js";
export default {
  props: {
    images: Array,
    fullScreen: Boolean,
    miniaturaSeleccionada: Number,
    sliderId: String,
  },
  data: () => ({
    slider: null,
    current_slide: 0,
  }),
  mounted() {
    this.initilizeSlider();
  },
  methods: {
    nextSlide() {
      this.slider.next();
      this.current_slide = this.slider.getCurrentSlide();
    },
    previousSlide() {
      this.slider.previous();
      this.current_slide = this.slider.getCurrentSlide();
    },
    initilizeSlider() {
      const scrolleable = this.$refs.scrolleable;
      this.slider = new Slider({
        scrolleable,
        length: this.images.length,
        first: 0,
      });
    },
    moveSliderTo(index) {
      this.current_slide = index;
    },
    imagenClickeada() {
      this.$emit("imagenClickeada");
    },
    scroleameEsta(evt) {
      this.slider.scrollLeft(evt.target.scrollLeft);
      if (Number.isInteger(this.slider.getCurrentSlide())) {
        this.current_slide = this.slider.getCurrentSlide();
      }
    },
  },
  watch: {
    current_slide(to, from) {
      if (to > from) {
        this.$emit("nextSlide", Math.round(to));
      } else if (from > to) {
        this.$emit("previousSlide", Math.round(from));
      }
    },
    miniaturaSeleccionada(newValue) {
      this.slider.to(newValue);
    },
  },
};
</script>

<style scoped lang="scss">
.slider.fullScreen {
  height: 100vh;
  width: 90vw;
  border: none;
}
.slider {
  width: 100%;
  height: 100%;
  position: relative;
  border-right: 1px solid var(--border-gray);
  border-bottom: 1px solid var(--border-gray);
  .scrolleable {
    height: 100%;
    width: 100%;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
    overflow-y: hidden;
    overflow-x: scroll;
    &__slide {
      scroll-snap-align: center;
      display: inline-block;
      vertical-align: top;
      width: 100%;
      height: 100%;
      &__center-image {
        width: 100%;
        height: 100%;
      }
      img {
        object-fit: contain;
        width: auto;
        cursor: zoom-in;
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .arrow {
    position: absolute;
    height: 50px;
    z-index: 1;
    display: grid;
    place-content: center;
    top: calc(50% - 25px);
    font-size: 2rem;
    border-radius: 20px;
    cursor: pointer;
    &.previous {
      left: 5px;
    }
    &.next {
      right: 5px;
    }
  }
}
</style>
