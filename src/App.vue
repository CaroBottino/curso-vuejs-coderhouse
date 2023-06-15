<template>
  <div id="app">
    <NavbarComponent @login="onLoginSubmit" :cartQ="cartQuantity" />
    <div v-if="show">
      <LoginComponent @logged="onLoginSubmit" />
    </div>
    <div v-else>
      <ListadoComponentVue :items="listado" @addToCart="onAddToCart" />
    </div>
    <CarritoComponent :items="itemsCarrito" />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import ListadoComponentVue from "./components/ListadoComponent.vue";
import CarritoComponent from "./components/CarritoComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";

import items from "@/assets/json/items.json";

export default {
  name: "App",
  components: {
    NavbarComponent,
    ListadoComponentVue,
    CarritoComponent,
    FooterComponent,
    LoginComponent,
  },
  data() {
    return {
      listado: items,
      itemsCarrito: [],
      loged: false,
      show: false,
    };
  },
  computed: {
    cartQuantity() {
      return this.itemsCarrito.length;
    },
  },
  methods: {
    onLoginSubmit(show) {
      this.show = show;
    },
    onAddToCart(item) {
      this.itemsCarrito.push(item);
    },
  },
};
</script>

<style></style>
