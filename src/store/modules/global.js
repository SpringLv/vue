// import ArrayRemove from "lodash/remove";
import clone from "lodash/cloneDeep";

const global = {
  state: {
    navigations: [
      {
        name: "首页",
        key: "home",
        link: "/home",
        routerPath: "./views/Home.vue",
        isActived: true,
        isShow: false
      },
      {
        name: "列表",
        key: "list",
        link: "/list",
        routerPath: "./views/List.vue",
        isActived: false,
        isShow: false
      },
      {
        name: "表格",
        key: "table",
        link: "/table",
        routerPath: "./views/Table.vue",
        isActived: false,
        isShow: false
      },
      {
        name: "表单",
        key: "form",
        link: "/form",
        routerPath: "./views/Form.vue",
        isActived: false,
        isShow: false
      }
    ]
  },
  mutations: {
    SET_NAVIGATION: (state, data) => {
      const { type, value } = data;
      const copy = clone(state.navigations);
      state.navigations = copy.map(item => {
        if (item.link !== value) return item;
        if (type === "showActived") {
          item.isShow = true;
          item.isActived = true;
        } else if (type === "show") {
          item.isShow = true;
        } else if (type === "hide") {
          item.isShow = false;
          item.isActived = false;
        }
        return item;
      });
    }
  },
  actions: {
    setNavigation({ commit }, { type, value }) {
      commit("SET_NAVIGATION", { type, value });
    }
  }
};

export default global;
