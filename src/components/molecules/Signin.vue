<template>
  <div class="signin d-flex flex-column">
    <div class="signin__title d-flex align-center pa-4 pt-0">
      <v-icon color="black" large>person</v-icon>
      <h4>Ingresá</h4>
    </div>
    <hr />
    <div class="signin__content pa-3 mt-4">
      <div class="signin__content__social">
        <p class="mb-4">Con tu cuenta de Google o Facebook</p>
        <div class="sigin__content__social__buttons">
          <v-btn color="#EA452F" dark large class="mr-2">Google</v-btn>
          <v-btn color="#4267B2" dark large>Facebook</v-btn>
        </div>
      </div>
      <div class="signin__content__email mt-4">
        <p class="mb-4">Con tu e-mail</p>
        <form
          action=""
          class="signin__content__email__form pr-3 pl-3"
          @submit.prevent=""
        >
          <v-text-field
            required
            label="Email"
            placeholder="Ingrese su email"
          ></v-text-field>
          <v-text-field
            required
            label="Password"
            placeholder="Ingrese su contraseña"
            type="password"
          ></v-text-field>
          <div class="d-flex align-center justify-space-between">
            <v-btn type="submit" color="primary" small>Ingresar</v-btn>
            <a href="">Olvidé mi contraseña</a>
          </div>
        </form>
        <div class="signin__content__no-account mt-6">
          <p>¿No tenés cuenta?</p>
          <v-btn color="primary">Crear Nueva Cuenta</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.signin {
  hr {
    width: 90%;
    margin: auto;
  }
  &__content {
    width: 100%;
    max-width: 800px;
    margin: auto;
    &__email {
      &__form {
        width: 100%;
        max-width: 400px;
      }
    }
  }
  a {
    font-size: 14px;
  }
}
</style>
