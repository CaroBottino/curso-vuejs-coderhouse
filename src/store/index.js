import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
        activeTab: 0,
    },
    getters: {
        getUsers: (state) => {
            return state.users;
        },
        getActiveTab: (state) => {
            return state.activeTab;
        },
    },
    mutations: {
        setUsers: (state, users) => {
            return state.users = users;
        },
        setActiveTab: (state, index) => {
            return state.activeTab = index;
        },
    },
    actions: {
        addUserAction: (context, payload) => {
            let user = {
                fullname: `${payload.name} ${payload.surname}`,
                pass: payload.password,
                role: "buyer",
                cart: [],
                email: payload.email,
            };

            return fetch("https://649b334abf7c145d023a2086.mockapi.io/v1/users", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
        },
        editUserAction: (context, payload) => {
            return fetch(`https://649b334abf7c145d023a2086.mockapi.io/v1/users/${payload.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
        },
        getUsersAction: (context) => {
            fetch("https://649b334abf7c145d023a2086.mockapi.io/v1/users")
                .then((res) => res.json())
                .then((users) => {
                    context.commit('setUsers', users)
                });
        },
        deleteUserAction: (context, payload) => {
            return fetch(`https://649b334abf7c145d023a2086.mockapi.io/v1/users/${payload}`, {
                method: 'DELETE',
            })
        },
        defineActiveTabAction: (context, payload) => {
            context.commit('setActiveTab', payload)
        },
    },
    modules: {}
});
