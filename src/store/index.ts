import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerAll: { mini: false, view: true },
  },
  mutations: {
    get_drawer(state, data) {
      state.drawerAll = data;
    },
  },
  actions: {},
  modules: {},
});
