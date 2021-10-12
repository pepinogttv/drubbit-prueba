<template>
  <div class="cart pa-1">
    <div class="cart__title d-flex align-center pb-4 pl-2">
      <v-icon color="black" class="mr-1">shopping_cart</v-icon>
      <h4>Carrito</h4>
    </div>
    <div class="cart__products pt-2 pb-2">
      <v-card flat>
        <v-layout class="pa-3" wrap>
          <v-flex lg2 sm12 xs12 class="pa-2 d-flex justify-center align-center">
            <div class="img-container d-flex justify-center align-center">
              <img
                src="https://foschia.com.ar/static/uploads/products/images/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6Iqms6iJ-0a1aQfM2pz0gZIp4aBB_f6a3S6jXJnjC1Q5a-J4VQDpIX65.jpg"
                alt=""
              />
            </div>
          </v-flex>
          <v-flex lg6 sm6 xs12 class="pa-2 d-flex flex-column justify-center">
            <a href=""
              >Griferia Cocina Hidromet Monocomando Jockey Pico Recto</a
            >
            <div class="price-container">
              <del class="price-container__regular-price">{{
                9284 | price_formater
              }}</del>
              <div>
                <span class="price-container__discounted-price">{{
                  (9284 * ((100 - 30) / 100)) | price_formater
                }}</span>
                <span class="price-container__discount">{{ 25 }}% OFF</span>
              </div>
            </div>
          </v-flex>
          <v-flex
            lg2
            sm3
            xs6
            class="pr-2 pl-2 d-flex flex-column justify-center"
          >
            <label>Unidades</label>
            <input type="number" min="1" value="1" />
          </v-flex>
          <v-flex
            lg2
            sm3
            xs6
            class="d-flex flex-column justify-center align-center"
          >
            <v-btn fab text color="primary">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
    <div
      class="cart__totals d-flex justify-space-around align-center pt-4 flex-wrap"
    >
      <table class="mb-3 mb-lg-0 mb-md-0 mb-sm-0 pa-2">
        <tbody>
          <tr class="subtotal">
            <td class="subtotal-title">Productos (1)</td>
            <td class="subtotal-amount">$ 9.284</td>
          </tr>
          <tr class="discount">
            <td class="discount-title">Descuento Online</td>
            <td class="discount-amount">-$ 1.671</td>
          </tr>
          <tr class="discount">
            <td class="discount-title">Descuento Especial</td>
            <td class="discount-amount">-$ 1.114</td>
          </tr>
          <tr class="total">
            <td class="total-title">Total</td>
            <td class="total-amount">$ 6.499</td>
          </tr>
        </tbody>
      </table>
      <v-btn color="primary" large>
        Finalizar compra
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
input {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
}
label {
  font-size: 0.8rem;
}
a {
  font-size: 0.9rem;
}
label,
a {
  font-weight: bold;
}
a {
  color: var(--primary);
}
.img-container {
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--white);
}
table {
  tbody {
    tr {
      td {
        text-align: right;
        font-size: 1.1rem;
        @media screen and(max-width: 520px) {
            text-align: right;
        }
      }
      td:first-child {
          text-align: left;
        font-size: 1rem;
        padding-right: 30px;
      }
    }
    .total {
      font-weight: 400;
      .total-title {
        font-weight: bold;
        font-size: 1.3rem;
      }
      .total-amount {
        font-size: 1.7rem;
      }
    }
    .discount {
      .discount-amount {
        color: #fc5242;
      }
    }
  }
}
img {
  width: 100%;
  height: 100%;
  max-height: 100px;
  object-fit: contain;
}
.cart {
  &__title,
  &__products {
    border-bottom: 1px solid var(--white);
  }
}
</style>
