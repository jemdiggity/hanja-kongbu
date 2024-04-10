import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../components/SignIn.vue"),
    },
    {
      path: "/hanja/add",
      name: "hanjaadd",
      component: () => import("../components/HanjaAdd.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/hanja/list",
      name: "hanjalist",
      component: () => import("../components/HanjaList.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

export default router;
