import Vue from "vue";
import Router from "vue-router";
import layout from "@/views/layouts/";

Vue.use(Router);
export const asyncRouterMap = [];
export const constantRouterMap = [
  {
    path: "/login", //登录
    meta: {
      title: "登录"
    },
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/404", //首页
    meta: {
      title: "未找到页面"
    },
    component: () => import("@/views/NotFound.vue")
  },
  {
    path: "/", //首页
    component: layout,
    redirect: "home",
    meta: {
      title: "首页"
    },
    children: [
      {
        path: "", //首页
        meta: {
          title: "首页"
        },
        component: () => import("@/views/Home.vue")
      },
      {
        path: "home", //首页
        meta: {
          title: "首页"
        },
        component: () => import("@/views/Home.vue")
      },
      {
        path: "table", //表格
        meta: {
          title: "表格"
        },
        component: () => import("@/views/Table.vue")
      },
      {
        path: "list", //列表
        meta: {
          title: "列表"
        },
        component: () => import("@/views/List.vue")
      },
      {
        path: "form", //表单
        meta: {
          title: "表单"
        },
        component: () => import("@/views/Form.vue")
      },
      {
        path: "*", //404
        meta: {
          title: "未找到页面"
        },
        component: () => import("@/views/NotFound.vue")
      }
    ]
  }
];
export default new Router({
  routes: constantRouterMap
});
