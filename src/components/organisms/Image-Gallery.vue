<template>
  <div>
    <v-layout class="container-gallery" wrap>
      <v-flex lg2 md2 sm12 xs12>
        <v-layout wrap>
          <v-flex
            lg12
            md12
            sm3
            xs3
            v-for="(image, index) in firstFourImages"
            :key="image"
          >
            <div
              class="miniatura d-flex justify-center"
              :class="{
                [(() => `miniatura-${index}`)()]: true,
                miniatura_selected: index === 0 ? true : false,
              }"
              @click="nuevaMiniaturaSeleccionada(index)"
              @mouseover="nuevaMiniaturaSeleccionada(index)"
            >
              <div
                class="last-miniatura__view-more"
                v-show="index === firstFourImages.length - 1"
                @click="toggleModal"
              >
                +{{ images.length - 3 }}
              </div>
              <img :src="image" alt="" />
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex lg10 md10 sm12 xs12>
        <slider
          sliderId="asdasnid"
          @imagenClickeada="toggleModal"
          @nextSlide="nuevaMiniaturaSeleccionada"
          @previousSlide="nuevaMiniaturaSeleccionada"
          :miniaturaSeleccionada="miniaturaSeleccionada"
          :images="images"
        />
      </v-flex>
    </v-layout>
    <Modal @hiddeModal="toggleModal" v-if="showModal">
      <slider sliderId="baisdaui" fullScreen :images="images"></slider>
    </Modal>
  </div>
</template>

<script>
import Modal from "../molecules/Modal.vue";
import Slider from "../molecules/Slider.vue";
export default {
  components: {
    Modal,
    Slider,
  },
  props: {
    images: Array,
  },
  data() {
    return {
      showModal: false,
      miniaturaSeleccionada: 0,
    };
  },
  computed: {
    firstFourImages() {
      return this.images.slice(0, 4);
    },
  },
  methods: {
    nuevaMiniaturaSeleccionada(nuevaMiniatura) {
      this.miniaturaSeleccionada = nuevaMiniatura;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
  watch: {
    miniaturaSeleccionada(to, from) {
      //Logica para cambiar el border que indica la miniatura seleccionada.
      const fromMiniatura = document.querySelector(`.miniatura-${from}`);
      const toMiniatura = document.querySelector(`.miniatura-${to}`);
      if (fromMiniatura) fromMiniatura.classList.remove("miniatura_selected");
      if (toMiniatura) toMiniatura.classList.add("miniatura_selected");
    },
  },
};
</script>

<style scoped lang="scss">
.container-gallery {
  @media screen and (max-width: 1264px) and (min-width: 960px) {
    min-height: 500px;
  }
  .miniatura {
    padding: 15px;
    display: block;
    border-bottom: 1px solid var(--border-gray);
    border-right: 1px solid var(--border-gray);
    width: 100%;
    position: relative;
    &:hover,
    &.miniatura_selected {
      border-left: 3px solid var(--primary);
      padding-left: 12px;
      cursor: pointer;
      @media screen and (max-width: 960px) {
        border-left: none;
        border-top: 3px solid var(--primary);
        padding-top: 9px;
      }
    }
    img {
      width: 100%;
      max-height: 100px;
      @media screen and (max-width: 960px) {
        height: 80px;
      }
      object-fit: contain;
    }
    .last-miniatura__view-more {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(255, 255, 255, 0.7);
      font-size: 46px;
      font-weight: 400;
      color: var(--primary);
      &:hover {
        cursor: zoom-in;
      }
    }
  }
}
</style>
