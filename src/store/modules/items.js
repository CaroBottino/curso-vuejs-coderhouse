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
      console.log("getItemsByUser: ", userId);
      return state.items.filter((item) => item.user === userId);
    },
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    },
  },
  actions: {
    getItems: (context) => {
      console.log("en getItems");
      MockapiController.getItems().then((res) => {
        context.commit("setItems", res.data);
      });
    },
  },
};
