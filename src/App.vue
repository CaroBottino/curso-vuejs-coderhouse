<template>
  <div id="app">
    <NavbarComponent
      :cartQ="cartQuantity"
      :logged="logged"
      @goToLogin="onGoToLogin"
      @backHome="onBackHome"
    />
    <div v-if="show">
      <LoginComponent @logged="onLoginSubmit" />
    </div>
    <div v-else>
      <ListadoComponentVue
        :items="listado"
        :itemsCart="itemsCarrito"
        @addToCart="onAddToCart"
      />
    </div>
    <CarritoComponent :items="itemsCarrito" @updateStock="updateStock" />
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
      logged: false,
      show: false,
      user: {},
    };
  },
  computed: {
    cartQuantity() {
      return this.itemsCarrito.length;
    },
  },
  methods: {
    onLoginSubmit(user) {
      this.show = false;
      this.logged = true;
      this.user = user;
    },
    onGoToLogin() {
      this.show = true;
    },
    onBackHome() {
      this.show = false;
    },
    isInCart(i) {
      return this.itemsCarrito.find(({ item }) => item.name === i.name);
    },
    updateStock(i) {
      this.listado.forEach((item) => {
        if (item.name === i.name) {
          console.log(`stock: ${item.stock}, q: ${i.q}`);
          item.stock = item.stock - i.q;
        }
      });

      // this.itemsCarrito.forEach((item) => {
      //   if (item.name === i.name) {
      //     item.q++;
      //   }
      // });
    },
    onAddToCart(item) {
      this.updateStock(item);
      this.itemsCarrito.push(item);
    },
  },
};
</script>

<style></style>
