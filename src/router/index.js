import Vue from "vue";
import VueRouter from "vue-router";

const lazyLoad = (view) => () => import(`../views/${view}.vue`);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: lazyLoad("Home"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
