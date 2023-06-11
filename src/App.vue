<template>
  <div id="app">
    <NavbarComponent />
    <ListadoComponentVue :items="listado" />
    <CarritoComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import ListadoComponentVue from "./components/ListadoComponent.vue";
import CarritoComponent from "./components/CarritoComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

import items from "@/assets/json/items.json";

export default {
  name: "App",
  components: {
    NavbarComponent,
    ListadoComponentVue,
    CarritoComponent,
    FooterComponent,
  },
  data() {
    return {
      listado: items,
    };
  },
};
</script>

<style></style>
