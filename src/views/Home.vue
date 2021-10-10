<template>
  <div class="container-principal">
    <product-detail />
    <recommended-products :data="recommendedProducts"/>
    <banner />
  </div>
</template>

<script>
import ProductDetail from "../components/organisms/Product-Detail.vue";
import Banner from "../components/organisms/Banner.vue";
import RecommendedProducts from '../components/organisms/Recommended-Products.vue';
export default {
  name: "Home",
  components: {
    ProductDetail,
    Banner,
    RecommendedProducts
  },
  data: () => ({
    recommendedProducts: [
      {
        title: "Griferia De Cocina Hidromet Discovery Pico Curvo White 905",
        price: 55260,
        discount: 25,
        cuotas: "12 cuotas sin interés",
        image:
          "https://foschia.com.ar/static/uploads/products/images/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Iplwf3W8AUzU7CiaL4j4ACOHTnEV5ivi4PZBwHf53-7_LYXwA1oY8NF.jpg",
      },
      {
        title: "Griferia De Cocina Hidromet One White 3070Bl",
        price: 95667,
        discount: 25,
        cuotas: "12 cuotas sin interés",
        image:
          "https://foschia.com.ar/static/uploads/products/images/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Iplwf3W8AUzU2IT2JzAGm13swfkOFPEaptk_sjicBxlkyG8t9yWw6X4.jpg",
      },
      {
        title: "Griferia De Cocina Hidromet Discovery Pico Recto White 910",
        price: 55465,
        discount: 25,
        cuotas: "12 cuotas sin interés",
        image:
          "https://foschia.com.ar/static/uploads/products/images/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Iplwf3W8AUzU_Lokd1wQc2smPa7FVqv6pMDKJ983GRa9Hc6O6A8wUz8.jpg",
      },
      {
        title: "Griferia De Cocina Hidromet Jockey Pico Recto White 6370Bl",
        price: 62687,
        discount: 25,
        cuotas: "12 cuotas sin interés",
        image:
          "https://foschia.com.ar/static/uploads/products/images/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Iplwf3W8AUzU3hyp6J9CbH9Qc4HhBjdBMpquUaIbSy5ZY-iqPzRCL-s.jpg",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.container-principal {
  width: 100%;
  max-width: 1200px;
  margin: 1rem auto;
}
</style>
