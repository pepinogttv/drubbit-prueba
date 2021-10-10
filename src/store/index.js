import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dropdownContent: null,
  },
  mutations: {
    openDropdown(state, contentName) {
      state.dropdownContent = contentName;
    },
    closeDropdown(state) {
      state.dropdownContent = null;
    },
  },
  actions: {
    actionOpenDropdown({ commit }, contentName) {
      commit("openDropdown", contentName);
    },
    actionCloseDropdown({ commit }) {
      commit("closeDropdown");
    },
  },
});
