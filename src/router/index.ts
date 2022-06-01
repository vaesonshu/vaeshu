import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "",
        name: "index",
        component: () => import("../views/channels/index.vue"),
      },
      {
        path: "/index/:catalog",
        name: "catalog",
        component: () => import("../views/channels/Template.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/reg",
    name: "reg",
    component: () => import("../views/Reg.vue"),
  },
  {
    path: "/forget",
    name: "forget",
    component: () => import("../views/Forget.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
