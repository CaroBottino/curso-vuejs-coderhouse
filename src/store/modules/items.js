import MockapiController from "@/controllers/MockapiController";

export const itemsModule = {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    getItems: (state) => {
      return state.items;
    },
    getItemsByUser: (state) => (userId) => {
      return state.items.filter((item) => item.user === userId);
    },
    getItemById: (state) => (id) => {
      return state.items.find((item) => item.id === id);
    },
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    },
  },
  actions: {
    getItems: (context) => {
      MockapiController.getItems().then((res) => {
        context.commit("setItems", res.data);
      });
    },
    createItem: (context, payload) => {
      MockapiController.createItem(payload);
    },
    updateItem: (context, payload) => {
      console.log("item a editar: ", payload);
      MockapiController.updateItem(payload.id, payload);
    },
  },
};
