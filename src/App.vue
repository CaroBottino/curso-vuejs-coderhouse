<template>
  <div id="app">
    <div>
      <h2>Desafío Formulario Vue-Cli Bottino</h2>
      <p>
        Proyecto para aplicar conocimientos adquiridos durante clase 8:
        formularios.
      </p>
    </div>
    <hr />
    <FormComponent @submitForm="addUser" />
    <hr />
    <VueFormComponent @submitForm="addUser" />
    <hr />
    <TableComponent
      :headers="headers"
      :data="users"
      @submitExtra="addExtraInfo"
    />
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import TableComponent from "./components/TableComponent.vue";
import VueFormComponent from "./components/VueFormComponent.vue";

export default {
  name: "App",
  components: {
    FormComponent,
    TableComponent,
    VueFormComponent,
  },
  data() {
    return {
      users: [],
      headers: ["name", "surname", "email", "document", "extra", "actions"],
    };
  },
  methods: {
    addUser(form) {
      this.users.push(form);
    },
    addExtraInfo(item, extra) {
      console.log("addExtraInfo: ", item);

      this.users.forEach((user) => {
        if (
          user.name == item.name &&
          user.surname == item.surname &&
          user.email == item.email
        ) {
          console.log("user found!");
          user.extra = extra;
        }
      });
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
