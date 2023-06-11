<template>
  <div>
    <NavbarComponent />
    <LoginComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";

export default {
  name: "LoginPage",
  components: {
    NavbarComponent,
    FooterComponent,
    LoginComponent,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
