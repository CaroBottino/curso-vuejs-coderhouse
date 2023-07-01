<template>
  <div id="app">
    <div>
      <h2>Desafío Formulario Vue-Cli Bottino</h2>
      <p>
        Proyecto para aplicar conocimientos adquiridos durante clase 8:
        formularios.
      </p>
      <p>
        Se amplía proyecto para aplicar uso de Store Vuex, Vue Router y Fetch
        API.
      </p>
    </div>
    <hr />
    <FormComponent />
    <hr />
    <!-- <VueFormComponent /> -->
    <hr />
    <TableComponent
      :headers="headers"
      :data="getUsers"
      @submitExtra="addExtraInfo"
    />
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import TableComponent from "./components/TableComponent.vue";
// import VueFormComponent from "./components/VueFormComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    FormComponent,
    TableComponent,
    // VueFormComponent,
  },
  data() {
    return {
      headers: ["name", "surname", "email", "document", "extra", "actions"],
    };
  },
  computed: {
    // getUsers() {
    //   return this.$store.getters.getUsers;
    // },
    ...mapGetters(["getUsers"]),
  },
  methods: {
    addExtraInfo(item) {
      this.$store.dispatch("editUserAction", item);
    },
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
