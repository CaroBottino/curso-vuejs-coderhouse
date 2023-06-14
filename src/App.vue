<template>
  <div id="app">
    <NavbarComponent @login="onLoginSubmit" />
    <div v-if="show">
      <LoginComponent @logged="onLoginSubmit" />
    </div>
    <div v-else>
      <ListadoComponentVue :items="listado" />
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
      itemsCarrito: [
        {
          name: "Fugazzeta con jamón",
          img: "https://images.deliveryhero.io/image/pedidosya/products/87d1409b-f779-4db8-8262-947f2ed22a32.jpg?quality=90&width=1280",
          price: 4800,
          q: 1,
        },
        {
          name: "Pizza de pepperoni",
          img: "https://images.deliveryhero.io/image/pedidosya/products/34281550-aeef-4317-870f-124be3862017.jpg?quality=90&width=1280",
          price: 4160,
          q: 2,
        },
      ],
      loged: false,
      show: false,
    };
  },
  methods: {
    onLoginSubmit(show) {
      this.show = show;
    },
  },
};
</script>

<style></style>
