<template>
  <div class="interaction">
    <div class="interaction__fav-share d-flex flex-column">
      <v-btn fab text x-small class="m mb-2">
        <v-icon>favorite_border</v-icon>
      </v-btn>
      <share-product></share-product>
    </div>
    <span class="interaction__route">
      Griferías > Griferías Para Cocina > Monocomando
    </span>
    <h1 class="interaction__title">
      Griferia De Cocina Ultragrif Jack Steel Monocomando
    </h1>
    <div class="interaction__product-sku">FOS-141574</div>
    <del class="interaction__regular-price">
      <span>{{ price | price_formater }}</span>
    </del>
    <div class="interaction__price-container">
      <div class="interaction__price-container__price">
        <span> {{ (price * ((100 - 30) / 100)) | price_formater }} </span>
      </div>
      <span class="interaction__price-container__discount">{{ discount }}% OFF</span>
    </div>
    <div class="interaction__stock d-flex align-center">
      <v-icon>done</v-icon> Stock disponible
    </div>
    <div class="interaction__cuotas d-flex align-center">
      <v-icon>credit_card</v-icon> Hasta 24 cuotas
    </div>
    <div
      class="interaction__quantity d-flex justify-center align-center flex-column"
    >
      <div class="quantity-input-group">
        <button @click="quantity--">
          <v-icon>remove</v-icon>
        </button>
        <input
          type="number"
          class="control quantity"
          value="1"
          min="1"
          v-model="quantity"
          :max="stock"
          autocomplete="off"
        />
        <button @click="quantity++">
          <v-icon>add</v-icon>
        </button>
      </div>
      <div class="interaction__quantity__disponibles">
        <small>{{ stock }} disponibles </small>
      </div>
    </div>
    <div class="interaction__buy-button">
      <v-btn large block color="primary">
        <v-icon left>add_shopping_cart</v-icon>
        Comprar ahora
      </v-btn>
    </div>
  </div>
</template>

<script>
import ShareProduct from "./Share-Product.vue";
export default {
  components: {
    ShareProduct,
  },
  props: {
    stock: Number,
    discount: {
      type: Number,
      default: 0,
    },
    price: Number,
  },
  data: () => ({
    quantity: 0,
  }),
  watch: {
    quantity() {
      this.quantity < 1 ? (this.quantity = 1) : this.quantity;
      this.quantity > this.stock ? (this.quantity = this.stock) : this.quantity;
    },
  },
};
</script>

<style scoped lang="scss">
.interaction {
  padding: 15px 30px;
  background-color: white;
  position: relative;
  &__fav-share {
    position: absolute;
    right: 8px;
    top: 8px;
    button {
      background-color: var(--white);
    }
  }
  &__route {
    font-size: 14px;
    color: var(--primary);
  }
  &__title {
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.1;
    margin-top: 12px;
  }
  &__regular-price {
    font-size: 0.9rem;
    color: #8e8e8e;
    display: inline-block;
  }
  &__product-sku {
    margin: 2px 0 14px;
    font-size: 0.7rem;
    color: #999;
  }
  &__price-container {
    line-height: 1;
    margin-top: 0;
    &__price {
      font-size: 36px;
      font-weight: 300;
      vertical-align: middle;
      display: inline-block;
      line-height: 1.3;
      margin-right: 5px;
    }
    &__discount {
      font-size: 0.9rem;
      font-weight: 400;
      color: #35a3a8;
      vertical-align: middle;
    }
  }
  &__stock {
    margin-block: 15px;
  }
  &__stock,
  &__cuotas {
    font-size: 14px;
    i {
      margin-right: 5px;
      color: black;
    }
  }
  &__quantity {
    margin-top: 25px;
    button {
      padding: 8px 12px;
      background: 0 0;
      font-weight: 600;
      border: 1px dotted var(--primary);
      line-height: 0;
      border-radius: 4px;
      -webkit-border-radius: 4px;
      i {
        color: var(--primary);
      }
      &:hover {
        background-color: var(--primary);
      }
      &:hover i {
        color: white;
      }
    }
    input {
      width: 60px;
      text-align: center;
      height: 40px;
      border-bottom: 1px solid var(--border-gray);
      margin-inline: 8px;
      &:focus {
        transition: all 0.3s;
        outline: none;
        border-bottom: 1px solid VAR(--primary);
      }
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
    &__disponibles {
      margin: 4px 0 12px;
    }
  }
}
</style>
