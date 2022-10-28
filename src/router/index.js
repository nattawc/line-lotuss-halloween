import Home from "@/views/Home.vue";
import Pic from "@/views/Pic.vue";
import Submit from "@/views/Submit.vue";
import Winner from "@/views/Winner.vue";
import Condition from "@/views/Condition.vue";

import { createRouter, createWebHistory } from "vue-router";
import Success from "@/views/Success.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/pic",
    component: Pic,
  },
  {
    path: "/submit",
    component: Submit,
  },
  {
    path: "/winner",
    component: Winner,
  },
  {
    path: "/condition",
    component: Condition,
  },
  {
    path: "/success",
    component: Success,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
