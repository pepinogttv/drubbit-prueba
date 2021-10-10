<template>
  <v-layout wrap style="background-color: white;">
    <v-flex lg8 md8 sm12>
      <image-gallery :images="images"></image-gallery>
    </v-flex>
    <v-flex lg4 md4 sm12 class="container-product-interaction">
      <product-interaction :stock="stock" :discount="discount" :price="price" />
    </v-flex>
    <v-flex lg8 md8 sm12 xs12 class="caracteristicas border p-lg-2 p-md-2">
      <h5 class="caracteristicas__title">Características</h5>
      <v-layout wrap class="pl-2">
        <v-flex
          lg3
          md3
          sm3
          xs6
          v-for="[key, value] in Object.entries(caracteristicas)"
          :key="key"
        >
          <div class="caracteristicas__caracteristica-title text-uppercase">
            {{ key.replaceAll("_", " ") }}
          </div>
          <div class="caracteristicas__value">{{ value }}</div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex lg8 md8 sm12 xs12 class="caracteristicas p-lg-2 p-md-2">
      <h5 class="caracteristicas__title">Mas informacion</h5>
      <v-layout wrap class="pl-2">
        <v-flex
          lg12
          md12
          sm12
          xs12
          v-for="({ title, description }, index) in masInformacion"
          :key="index"
        >
          <div class="caracteristicas__caracteristica-title text-uppercase">
            {{ title }}
          </div>
          <div class="caracteristicas__value">{{ description }}</div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import ImageGallery from "./Image-Gallery.vue";
import ProductInteraction from "../molecules/Product-Interaction.vue";
export default {
  components: {
    ImageGallery,
    ProductInteraction,
  },
  data() {
    return {
      stock: 25,
      price: 9284,
      discount: 30,
      dataToShare: [""],
      caracteristicas: {
        origen: "Argentina",
        marca: "Ultragrif",
        linea: "Jack steel",
        lugar_de_instalacion: "De mesada",
        tipo_de_canilla: "Monocomando",
        tipo_de_pico: "Movil",
        tipo_de_limpieza: "No utilizar abrasivos",
        garantia: "5 años",
      },
      masInformacion: [
        {
          title: "tipo de instalacion",
          description: "Apto para calefon y/o termotanque",
        },
        {
          title: "descripcion marca",
          description:
            "ULTRAGRIF es una empresa Argentina con amplia experiencia y trayectoria, dedicada a la comercialización de griferías.",
        },
      ],
      images: [
        "https://foschia.com.ar/static/uploads/products/images/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Iqms6iJ-0a1aQfM2pz0gZIp4aBB_f6a3S6jXJnjC1Q5a-J4VQDpIX65.jpg",
        "https://foschia.com.ar/static/uploads/products/images/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Iqms6iJ-0a1aWygguIlajR70W-E2VPA2Gv0u3IAYBX1ROKt4zfEIFfM.jpg",
        "https://foschia.com.ar/static/uploads/products/images/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Iqms6iJ-0a1aRkO5ROIPwTOdGSaP7GxEhANKMbltQwPXYIJBETQaYMI.jpg",
        "https://foschia.com.ar/static/uploads/products/images/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Iqms6iJ-0a1aZQRSXVPsFAVwjWPtCA9fuzAeKwr5E30nCRZ6WPAhvFY.jpg",
        "https://foschia.com.ar/static/uploads/products/images/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Iqms6iJ-0a1aYil4zNGv2j9dL6NNrJ1SG6I8YjJKxb9PxFjh2vSF_wG.jpg",
        "https://foschia.com.ar/static/uploads/products/images/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Iqms6iJ-0a1aTEyK_EZPgWmfivLcPW6ai96FCf18LcD-q19bl91dG1f.jpg",
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.container-product-interaction {
  position: sticky;
  @media screen and(min-width: 960px) {
    position: sticky;
    top: 0;
  }
}
.caracteristicas {
  padding: 20px;
  &.border {
    border-bottom: 1px solid var(--border-gray);
    border-right: 1px solid var(--border-gray);
  }
  &__title {
    font-size: 1.25rem;
    margin: 0;
    margin-bottom: 1rem;
    color: inherit;
    font-weight: 600;
    line-height: 1.5;
    font-weight: 500;
  }
  &__caracteristica-title {
    color: var(--primary);
    padding: 0 8px 0 0;
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1.4;
  }
  &__value {
    padding: 2px 8px 12px 0;
    font-size: 1rem;
  }
}
</style>
