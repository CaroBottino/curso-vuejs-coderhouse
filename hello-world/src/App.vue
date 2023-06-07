<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <CardComponent title="Titulo" text="Descripcion que quiero que se vea." />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CardComponent from "./components/CardComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    CardComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
