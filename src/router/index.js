import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HolaMundo from "@/views/HolaMundo.vue";
import PokemonView from "@/views/PokemonView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: PokemonView,
  },
  {
    path: "/pregunta",
    name: "pregunta",
    component: () =>
      import("../views/PreguntaView.vue"),
  },
  {
    path: "/hola",
    name: "hola-mundo",
    component: HolaMundo,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
