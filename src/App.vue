<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />

        <PasswordForTesting minLength="4" />

        <TodoList />
        <hr />
        <ACounter />
        <hr />
        <AnAlbum />
    </div>
</template>

<script>
import PasswordForTesting from "./components/PasswordForTesting.vue";
import HelloWorld from "./components/HelloWorld.vue";
import TodoList from "./components/TodoList.vue";
import ACounter from "./components/ACounter.vue";
import AnAlbum from "./components/AnAlbum.vue";

export default {
    name: "App",
    components: {
        PasswordForTesting,
        HelloWorld,
        TodoList,
        ACounter,
        AnAlbum,
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
