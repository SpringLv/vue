import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/", //首页
      meta: { auth: false },
      redirect: "/home"
    },
    {
      path: "/home", //首页
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/table", //表格
      component: () => import("@/views/Table.vue")
    },
    {
      path: "/list", //列表
      component: () => import("@/views/List.vue")
    },
    {
      path: "/form", //表单
      component: () => import("@/views/Form.vue")
    },
    {
      path: "*", //404
      component: () => import("@/views/NotFound.vue")
    }
  ]
});
