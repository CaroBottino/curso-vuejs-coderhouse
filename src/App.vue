<template>
  <div id="app">
    <NavbarComponent />
    <ListadoComponentVue :items="listado" />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import ListadoComponentVue from "./components/ListadoComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    ListadoComponentVue,
  },
  data() {
    return {
      listado: [
        {
          name: "Comida 1",
          img: "https://picsum.photos/seed/picsum/200/300",
          price: 123.4,
        },
        {
          name: "Comida 2",
          img: "https://picsum.photos/seed/picsum/200/300",
          price: 123.4,
        },
        {
          name: "Comida 3",
          img: "https://picsum.photos/seed/picsum/200/300",
          price: 123.4,
        },
        {
          name: "Comida 4",
          img: "https://picsum.photos/300/300/?image=41",
          price: 123.4,
        },
        {
          name: "Comida 5",
          img: "https://picsum.photos/seed/picsum/200/300",
          price: 123.4,
        },
        {
          name: "Comida 6",
          img: "https://picsum.photos/seed/picsum/200/300",
          price: 123.4,
        },
        {
          name: "Comida 7",
          img: "https://picsum.photos/seed/picsum/200/300",
          price: 123.4,
        },
        {
          name: "Comida 8",
          img: "https://picsum.photos/seed/picsum/200/300",
          price: 123.4,
        },
      ],
    };
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
