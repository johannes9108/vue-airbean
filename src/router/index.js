import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Cart from "../views/CartView.vue";
import Landing from "../views/LandingView.vue";
import Menu from "../views/MenuView.vue";
import Profile from "../views/ProfileView.vue";
import Status from "../views/StatusView.vue";
import About from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/landing",
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  // {
  //   path: "/cart",
  //   name: "Cart",
  //   component: Cart,
  // },
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
    children: [{ path: "/cart", name: "Cart", component: Cart }],
  },
  {
    path: "/status",
    name: "Status",
    component: Status,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
