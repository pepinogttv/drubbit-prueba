<template>
  <div class="productos-recomendados">
    <h4 class="productos-recomendados__title">
      También te puede interesar
    </h4>
    <hr />
    <v-layout wrap>
      <v-flex
        lg3
        md3
        sm6
        xs6
        class="d-flex justify-center pl-lg-1 pl-md-1 pl-sm-1 pl-1 | pr-lg-3 pr-md-2 pr-sm-1 pr-1 | mb-3"
        v-for="{ title, price, discount, cuotas, image } in data"
        :key="title"
      >
        <v-card class="productos-recomendados__card pb-2" hover>
          <div class="productos-recomendados__card__fav">
            <v-btn fab text x-small class="m mb-2">
              <v-icon>favorite_border</v-icon>
            </v-btn>
          </div>
          <div class="productos-recomendados__card__img-container">
            <img :src="image" alt="" />
          </div>
          <div
            class="productos-recomendados__card__detail-container pa-lg-4 pa-md-4 pa-sm-4 pa-2"
          >
            <div class="regular-price">
              <del>{{ price | price_formater }}</del>
            </div>
            <div class="discount-price">
              {{ (price * (discount / 100 + 1)) | price_formater }}
            </div>
            <div class="cuotas">{{ cuotas }}</div>
            <div class="recomendacion-title">{{ title }}</div>
            <div
              class="buy-button d-lg-flex d-md-flex d-sm-flex d-none | justify-center "
            >
              <v-btn small rounded>
                <v-icon left>add_shopping_cart</v-icon>
                Comprar
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style scoped lang="scss">
.productos-recomendados {
  padding: 20px 0px;
  &__title {
    padding-top: 20px;
    line-height: 1.5;
    font-size: 1.5rem;
  }
  &__card {
    width: 100%;
    position: relative;
    &__fav {
      position: absolute;
      right: 5px;
      top: 5px;
      button {
        background-color: var(--white);
      }
    }
    &__img-container {
      width: 100%;
      height: 280px;
      @media screen and (max-width: 1264px) {
        max-height: 220px;
      }
      border-bottom: 1px solid var(--border-gray);
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 90%;
        height: 90%;
        object-fit: contain;
      }
    }
    &__detail-container {
      .recomendacion-title {
        color: #222;
        text-overflow: ellipsis;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 0.9rem;
        line-height: 1.5;
        min-height: 42px;
        margin-top: 13px;
      }
      .regular-price {
        font-size: 0.8rem;
        color: #aaa;
        display: block;
      }
      .discount-price {
        font-size: 1.2rem;
      }
      .buy-button {
        margin-top: 1rem;
      }
      .cuotas {
        font-weight: 500;
        background-color: #dbf2ff;
        padding: 3px 8px;
        border-radius: 4px;
        font-size: 0.9rem;
        display: inline-block;
        color: var(--primary);
      }
    }
  }
}
</style>
