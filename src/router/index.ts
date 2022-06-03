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
    beforeEnter: (to, from, next) => {
      console.log("from", from);
      console.log("to", to);
      console.log("next", next);
      if (from.name === "login") {
        next();
      } else {
        next("/login");
      }
    },
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
