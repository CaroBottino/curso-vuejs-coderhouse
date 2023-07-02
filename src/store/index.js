import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
  },
  getters: {
    getTodoList: (state) => {
      return state.todoList;
    },
  },
  mutations: {
    addTodo: (state, todo) => {
      state.todoList.push(todo);
    },
  },
  actions: {
    addTodoAction: (context, payload) => {
      context.commit("addTodo", {
        timestamp: Date.now(),
        text: payload,
      });
    },
  },
  modules: {},
});
