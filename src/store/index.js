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
        },
        editUser: (state, user) => {
            state.users.forEach((u) => {
                if (
                    u.name == user.name &&
                    u.surname == user.surname &&
                    u.email == user.email
                ) {
                    u.extra = user.extra;
                }
            });
        },
    },
    actions: {
        addUserAction: (context, payload) => {
            context.commit('addUser', payload);
        },
        editUserAction: (context, payload) => {
            context.commit('editUser', payload);
        },
    },
    modules: {}
});