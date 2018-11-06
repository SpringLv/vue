// import ArrayRemove from "lodash/remove";
import clone from "lodash/cloneDeep";
import navigations from "../../config";

const global = {
  state: {
    isCollapse: false,
    navigations: navigations
  },
  mutations: {
    SET_NAVIGATION: (state, data) => {
      const { type, value } = data;
      const copy = clone(state.navigations);
      state.navigations = copy.map(item => {
        if (type === "show" && item.link === value) {
          item.isShow = true;
        } else if (type === "hide" && item.link === value) {
          item.isShow = false;
        }
        return item;
      });
    },
    SET_ISCOLLAPSE: (state, data) => {
      state.isCollapse = !data.value;
    }
  },
  actions: {
    setNavigation({ commit }, { type, value }) {
      commit("SET_NAVIGATION", { type, value });
    },
    setIsCollapse({ commit }, { value }) {
      commit("SET_ISCOLLAPSE", { value });
    }
  }
};

export default global;
