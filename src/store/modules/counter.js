export const counterModule = {
    namespaced: true,
    state: {
        counter: 0,
    },
    getters: {
        getCounter: (state) => {
            return state.counter;
        },
    },
    mutations: {
        increment: (state) => {
            return state.counter++;
        },
    },
    actions: {
        increment: (context) => {
            context.commit("increment");
        },
    },
};
