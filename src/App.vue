<template>
  <v-app>
    <dropdown
      v-if="dropdownContent"
      @closeDropdown="actionCloseDropdown"
      :openingAnimationFrom="dropdownContent === 'cart' ? 'right' : 'left'"
    >
      <signin v-if="dropdownContent === 'signin'" />
      <shoping-cart v-else-if="dropdownContent === 'cart'"></shoping-cart>
    </dropdown>
    <header-component />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <footer-component />
  </v-app>
</template>

<script>
import Header from "./components/organisms/Header.vue";
import Footer from "./components/organisms/Footer.vue";
import Dropdown from "./components/molecules/Dropdown.vue";
import Signin from "./components/molecules/Signin.vue";
import ShopingCart from "./components/molecules/ShoppingCart.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  components: {
    "header-component": Header,
    "footer-component": Footer,
    Dropdown,
    Signin,
    ShopingCart,
  },
  computed: {
    ...mapState(["dropdownContent"]),
  },
  methods: {
    ...mapActions(["actionCloseDropdown"]),
  },
};
</script>
<style>
:root {
  --primary: #007ac1;
  --secondary: #003a5b;
  --accent: #82b1ff;
  --error: #ff5252;
  --info: #2196f3;
  --success: #4caf50;
  --warning: #ffc107;
  --white: #e4e4e4;
  --border-gray: rgb(238, 238, 238);
}
body {
  font-family: "Raleway", sans-serif;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: inherit;
  line-height: 1.5;
}
h4 {
  font-weight: 400;
  font-size: 1.5rem;
}
hr {
  border: 0;
  border-top: 1px solid #ddd;
  margin: 10px 0;
}
.v-main {
  background-color: var(--white);
}
</style>
