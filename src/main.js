import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import components from "./components/"; //加载公共组件

import "./plugins/element.js";
import "./permission.js";
import "./registerServiceWorker";

import "./less/common.less";
import "./less/app.less";
import "./less/overwrite.css";
import "./mock";

Vue.config.productionTip = false;
Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, v => v.toUpperCase()); //首字母大写
  console.debug(name); //eslint-disable-line
  Vue.component(`v${name}`, components[key]);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
