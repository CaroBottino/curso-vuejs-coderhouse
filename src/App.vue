<template>
  <div id="app">
    <NavbarComponent />
    <!-- <ListadoComponentVue :items="listado" /> -->
    <LoginComponent />
    <CarritoComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
//import ListadoComponentVue from "./components/ListadoComponent.vue";
import CarritoComponent from "./components/CarritoComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";

import items from "@/assets/json/items.json";

export default {
  name: "App",
  components: {
    NavbarComponent,
    //ListadoComponentVue,
    CarritoComponent,
    FooterComponent,
    LoginComponent,
  },
  data() {
    return {
      listado: items,
    };
  },
};
</script>

<style></style>
