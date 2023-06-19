<template>
  <div id="app">
    <div>
      <h2>Desafío Formulario Vue-Cli Bottino</h2>
      <p>
        Proyecto para aplicar conocimientos adquiridos durante clase 8:
        formularios.
      </p>
    </div>
    <FormComponent />
    <TableComponent />
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import TableComponent from "./components/TableComponent.vue";

export default {
  name: "App",
  components: {
    FormComponent,
    TableComponent,
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
