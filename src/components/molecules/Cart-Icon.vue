<template>
  <v-btn text small color="white" @click="actionOpenDropdown('cart')" class="shopping_cart_button">
    <div class="shopping_cart_quantity">1</div>
    <v-icon>shopping_cart</v-icon>
    $6.499
  </v-btn>
</template>

<script>
import { mapActions } from "vuex";
export default {
    methods:{
        ...mapActions(['actionOpenDropdown'])
    }
};
</script>

<style>
.shopping_cart_button{
    position: relative;
}
.shopping_cart_quantity{
     border-radius: 50%;
     background-color: red;
     padding-inline: 3px;
     padding-block: 1px;
}
</style>
