<template>
  <v-menu
    offset-y
    :close-on-content-click="false"
    transition="scale-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn elevation="0" text class="primary" v-bind="attrs" v-on="on">
        <v-icon left>expand_more</v-icon>
        Menú
      </v-btn>
    </template>
    <v-card class="mx-auto secondary" width="320" tile>
      <v-list-item v-for="(item, index) in items" :key="index" class="m-0 pa-0">
        <v-list-item-content class="pa-0">
          <v-list-item-title class="white--text">
            <v-menu offset-x open-on-hover transition="scale-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  v-on="on"
                  v-bind="attrs"
                  block
                  class="d-flex justify-space-between white--text"
                >
                  {{ item.title }}
                  <v-icon right color="white">chevron_right</v-icon>
                </v-btn>
              </template>
              <v-card>
                <div v-for="(categoria, index) in item.categorias" :key="index" class="submenu pa-4 pb-2 pt-2">
                  <p class="submenu__title mb-2">{{ categoria.title }}</p>
                  <span v-for="li in categoria.items" :key="li" class="submenu__item">
                    {{ li }}
                    <br />
                  </span>
                </div>
              </v-card>
            </v-menu>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Griferías",
        categorias: [
          {
            title: "Griferías Para Baño",
            items: [
              "Griferías Para Baño",
              "Complementos",
              "Duchadores",
              "Griferia Automatica",
              "Griferia Bidet",
              "Griferia Inodoro",
              "Griferia Lavatorio",
              "Griferia Para Ducha",
              "Griferia Para Mingitorio",
              "Set Completo",
            ],
          },
          {
            title: "Griferías Para Cocina",
            items: [
              "Griferías Para Cocina",
              "Complementos",
              "Doble Comando",
              "Monocomando",
            ],
          },
          {
            title: "Griferías Para Lavadero",
            items: ["Griferías Para Lavadero"],
          },
        ],
      },
      { title: "Pisos" },
      { title: "Baño" },
      { title: "Cocina" },
      { title: "Hogar Y Electrodomesticos" },
      { title: "Habitat" },
    ],
  }),
};
</script>

<style>
.submenu__title{
    font-weight: 500;
}
.submenu__item{
    font-size: 14px;
}
</style>
