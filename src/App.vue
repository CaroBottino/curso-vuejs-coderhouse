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
        <router-link
          class="nav-link"
          :class="`${getActiveTab == 0 ? 'active' : ''}`"
          to="/"
        >
          Form
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :class="`${getActiveTab == 1 ? 'active' : ''}`"
          to="/vue-form"
        >
          Vue Form
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :class="`${getActiveTab == 2 ? 'active' : ''}`"
          to="/users"
        >
          Users
        </router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    // getUsers() {
    //   return this.$store.getters.getActiveTab;
    // },
    ...mapGetters(["getActiveTab"]),
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
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
}
</style>
