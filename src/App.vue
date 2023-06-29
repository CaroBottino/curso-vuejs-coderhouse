<template>
  <div id="app">
    <NavbarComponent :cartQ="cartQuantity" />

    <router-view />

    <CarritoComponent
      :items="storeState.user.cart"
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
import store from "./store";

export default {
  name: "App",
  components: {
    NavbarComponent,
    CarritoComponent,
    FooterComponent,
  },
  data() {
    return {
      storeState: store.state,
    };
  },
  computed: {
    cartQuantity() {
      return this.storeState.user.cart.length;
    },
  },
  methods: {
    onDeleteFromCart(itemId) {
      this.itemsCarrito = this.storeState.user.cart.filter((i) => {
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
