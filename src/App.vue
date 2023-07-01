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
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Form</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Vue Form</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Users</a>
      </li>
    </ul>
    <FormComponent />
    <hr />
    <VueFormComponent />
    <hr />
    <TableComponent
      :headers="headers"
      :data="getUsers"
      @submitEdit="editAvatar"
      @submitDelete="deleteItem"
    />
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import TableComponent from "./components/TableComponent.vue";
import VueFormComponent from "./components/VueFormComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    FormComponent,
    TableComponent,
    VueFormComponent,
  },
  data() {
    return {
      headers: ["id", "fullname", "pass", "email", "role", "avatar", "actions"],
    };
  },
  computed: {
    // getUsers() {
    //   return this.$store.getters.getUsers;
    // },
    ...mapGetters(["getUsers"]),
  },
  created() {
    this.getUsersFromApi();
  },
  methods: {
    editAvatar(item) {
      this.$store
        .dispatch("editUserAction", item)
        .then(() => this.$store.dispatch("getUsersAction"))
        .finally(() => alert("avatar editado"));
    },
    getUsersFromApi() {
      this.$store.dispatch("getUsersAction");
    },
    deleteItem(item) {
      this.$store
        .dispatch("deleteUserAction", item.id)
        .then(() => this.$store.dispatch("getUsersAction"));
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
