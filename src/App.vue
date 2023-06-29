<template>
  <div id="app">
    <NavbarComponent
      :cartQ="cartQuantity"
      :logged="logged"
      @goToLogin="onGoToLogin"
      @backHome="onBackHome"
    />

    <router-view />

    <CarritoComponent
      :items="itemsCarrito"
      @updateStock="updateStock"
      @deleteFromCart="onDeleteFromCart"
    />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import CarritoComponent from "./components/CarritoComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

import items from "@/assets/json/items.json";

export default {
  name: "App",
  components: {
    NavbarComponent,
    CarritoComponent,
    FooterComponent,
  },
  data() {
    return {
      listado: items,
      itemsCarrito: [],
      logged: true,
      show: false,
      user: {
        fullname: "",
        pass: "",
        role: "",
        email: "",
        id: "",
        cart: [],
      },
    };
  },
  computed: {
    cartQuantity() {
      return this.itemsCarrito.length;
    },
  },
  methods: {
    onGoToLogin() {
      this.show = true;
    },
    onBackHome() {
      this.show = false;
    },
    onDeleteFromCart(itemId) {
      this.itemsCarrito = this.itemsCarrito.filter((i) => {
        return i.id !== itemId;
      });
    },
    updateStock(i) {
      return i;
    },
  },
};
</script>

<style></style>
