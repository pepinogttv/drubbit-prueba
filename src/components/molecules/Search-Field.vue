<template>
  <div class="search_field_container">
    <v-text-field
      class="elevation-0"
      hide-details
      solo
      flat
      label="Buscar productos, marcas y más..."
    />
    <label class="black--text search_field_container__checkbox">
      <input type="checkbox" />
      en Oferta
    </label>
    <button class="search_field_container__button primary">
      <v-icon color="white">search</v-icon>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.search_field_container {
  width: 100%;
  display: flex;
  height: 45px;
  align-items: center;
  background-color: white;
  overflow: hidden;
  @media screen and (min-width: 950px) {
    border-radius: 4px;
  }
  padding: 2px;
  &__checkbox {
    padding-right: 0.5rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    white-space: nowrap;
    input {
      margin-right: 3px;
    }
  }
  &__button {
    height: 100%;
    width: 50px;
    margin: 0;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
}
</style>
