import Vue from "vue";
import Vuex from "vuex";
import { counterModule } from "./modules/counter";
import { photosModule } from "./modules/photos";

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
    modules: {
        counter: counterModule,
        photos: photosModule,
    },
});
