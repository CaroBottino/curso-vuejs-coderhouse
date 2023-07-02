<template>
  <div>
    <h1>TODO LIST</h1>

    <form @submit.prevent="submitHandler">
      <input v-model="todo" />
      <button>Add todo</button>
    </form>

    <hr />

    <ul>
      <li v-for="todo in getTodoList" :key="todo.timestamp">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoList",
  data() {
    return {
      todo: "",
    };
  },
  computed: {
    ...mapGetters(["getTodoList"]),
  },
  methods: {
    submitHandler() {
      this.$store.dispatch("addTodoAction", this.todo);
      this.todo = "";
    },
  },
};
</script>
