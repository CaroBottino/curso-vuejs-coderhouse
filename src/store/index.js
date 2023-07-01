import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
    },
    getters: {
        getUsers: (state) => {
            return state.users;
        }
    },
    mutations: {
        addUser: (state, user) => {
            state.users.push(user);
        }
    },
    actions: {
        addUserAction: (context, payload) => {
            context.commit('addUser', payload);
        }
    },
    modules: {

    }
});