<template>
  <header class="elevation-4">
    <v-layout class="primary white--text" wrap>
      <v-flex
        xs12
        sm12
        lg2
        md2
        class="d-flex align-center justify-center justify-lg-start"
      >
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="78px"
          max-width="190px"
          src="https://foschia.com.ar/static/img/logo-foschia-desktop.webp?x=1607945337"
          alt="foschia logo"
        ></v-img>
      </v-flex>
      <v-flex
        xs4
        sm4
        lg1
        md2
        class="d-flex align-center justify-center justify-lg-start mb-lg-0 mb-md-0 mb-2"
      >
        <Menu />
      </v-flex>
      <v-flex
        xs6
        sm2
        lg6
        md4
        class="align-center custom d-lg-flex d-md-flex d-none"
      >
        <search-field></search-field>
      </v-flex>
      <v-flex
        xs4
        sm4
        lg2
        md3
        class="d-flex align-center justify-center  mb-lg-0 mb-md-0 mb-2"
      >
        <v-btn text color="white" @click="actionOpenDropdown('signin')" small>
          <v-icon>person</v-icon>
          <span class="d-none d-lg-block d-md-block d-sm-block"
            >Ingresá / Registrate</span
          >
          <span class="d d-lg-none d-md-none d-sm-none">Ingreso</span>
        </v-btn>
      </v-flex>
      <v-flex
        xs4
        sm4
        lg1
        md1
        class="d-flex align-center justify-center  mb-lg-0 mb-md-0 mb-2"
      >
        <cart-icon />
      </v-flex>
      <v-flex xs12 class="d-lg-none d-md-none d-sm-flex" elavtion="10">
        <search-field></search-field>
      </v-flex>
    </v-layout>
  </header>
</template>
<script>
import SearchField from "../molecules/Search-Field.vue";
import Menu from "../molecules/Menu.vue";
import CartIcon from "../molecules/Cart-Icon.vue";
import { mapActions } from "vuex";
export default {
  components: {
    SearchField,
    Menu,
    CartIcon,
  },
  methods: {
    ...mapActions(["actionOpenDropdown"]),
  },
};
</script>
