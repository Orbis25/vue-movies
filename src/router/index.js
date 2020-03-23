import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/movies";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/peliculas",
    name: "Movies",
    component: Movies
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
