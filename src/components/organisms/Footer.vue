<template>
  <footer class="footer-container">
    <v-layout wrap class="footer-layout">
      <v-flex lg12 md12 sm12 xs12 class="pb-2 border-bottom-white">
        <v-layout wrap class="pt-8">
          <v-flex
            lg3
            md12
            sm12
            xs12
            class="d-flex justify-lg-start justify-center pt-4 pb-8 "
          >
            <v-img
              max-height="78px"
              max-width="190px"
              src="https://foschia.com.ar/static/img/logo-foschia-desktop.webp?x=1607945337"
              alt="Logo Foschia"
            ></v-img>
          </v-flex>
          <v-flex lg9 md12 sm12 xs12 class="pb-8">
            <v-layout wrap>
              <v-flex
                lg3
                md6
                sm6
                xs6
                class="d-flex flex-column align-lg-start align-center pa-4 text-center"
              >
                <span class=" white--text">
                  <v-icon color="white">email</v-icon> info@foschia.com.ar
                </span>
                <span class="white--text">
                  <v-icon color="white">call</v-icon> 4736-4000</span
                >
                <span class="text-lg-left">
                  <v-icon color="#999">location_on</v-icon> Colectora Este
                  30451, El Talar, Buenos aires
                </span>
                <div class="mt-3">
                  <v-icon color="white" class=" mr-4">language</v-icon>
                  <v-icon color="white">whatshot</v-icon>
                </div>
              </v-flex>
              <v-flex
                lg3
                md6
                sm6
                xs6
                class="d-flex flex-column align-center  pa-4"
              >
                <span class="list-title">INSTITUCIONAL</span>
                <ul>
                  <li>Sobre foschia</li>
                  <li>Sucursales</li>
                  <li>Información Legal</li>
                </ul>
              </v-flex>
              <v-flex
                lg3
                md6
                sm6
                xs6
                class="d-flex flex-column align-center  pa-4"
              >
                <span class="list-title">SERVICIO AL CLIENTE</span>
                <ul>
                  <li>Políticas de Envío</li>
                  <li>Políticas de Cambio</li>
                  <li>Cláusulas de Venta</li>
                  <li>Métodos de Pago</li>
                </ul>
              </v-flex>
              <v-flex
                lg3
                md6
                sm6
                xs6
                class="d-flex flex-column align-center  pa-4"
              >
                <span class="list-title">TUS FAVORITAS</span>
                <ul>
                  <li>Mejores Ofertas</li>
                  <li>Hot Sale</li>
                  <li>Cyber Monday</li>
                </ul>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex lg12 md12 sm12 xs12 class="pb-12 pt-4 border-bottom-white">
        <v-layout wrap>
          <v-flex lg8 md8 sm12 xs12>
            <small>
              Copyright &copy; 2020 Construdiseño S.A. El uso de este sitio web
              implica la aceptación de los Términos y Condiciones y de las
              Políticas de Privacidad de Construdiseño S.A. Las fotos son a modo
              ilustrativo. La venta de cualquiera de los productos publicados
              está sujeta a la verificación de stock. Los precios online para
              los productos presentados/publicados en www.foschia.com.ar son
              válidos exclusivamente para la compra vía internet en las páginas
              antes mencionadas. foschia.com.ar
            </small>
          </v-flex>
          <v-flex
            lg4
            md4
            sm12
            xs12
            class="sellos d-flex flex-column pt-2 pt-lg-0 pt-md-0 pl-lg-4 pl-md-4"
          >
            <div class="pb-4 sellos__title">SELLOS</div>
            <div>
              <img
                src="https://foschia.com.ar/static/img/data-fiscal.webp?x=1607945237"
                class="data-fiscal"
                alt="data fiscal"
              />
              <img
                src="https://foschia.com.ar/static/img/datos-personales.webp?x=1607945238"
                class="datos-personales"
                alt="proteccion de datos personales"
              />
              <img
                src="https://foschia.com.ar/static/img/sello-cace.webp?x=1607945342"
                class="sello-cace"
                alt="sello cace"
              />
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex lg12 md12 sm12 xs12 class="text text-center pa-4">
        <small>
          Clonado y desarrollado con
          <v-icon small color="#999">favorite</v-icon> por Simon Blanco
        </small>
      </v-flex>
    </v-layout>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sellos {
  &__title {
    font-weight: bold;
  }
  img {
    max-height: 50px;
    width: auto;
    margin-right: 15px;
  }
}
footer {
  color: #999;
  font-size: 0.9rem;
}
footer ul li {
  font-size: 0.9rem;
  color: #ddd;
}
.text-light-footer {
  color: #999;
}
ul {
  list-style: none;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
small {
  font-size: 95%;
}
.list-title {
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
}
.footer-container {
  background-color: black;
  color: #999;
}
.footer-layout {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}
.border-bottom-white {
  border-bottom: 1px solid #ddd;
}
.copyright_title {
  font-weight: bold;
}
</style>
