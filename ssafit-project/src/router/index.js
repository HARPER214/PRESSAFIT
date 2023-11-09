import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import SearchPage from "@/views/SearchPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegistPage from "@/views/RegistPage.vue";
import videoList from "@/components/Video/VideoList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      // name: "main",
      component: MainPage,
      children: [
        {
          path: "/list",
          name: "videoList",
          component: videoList,
        },
      ],
    },
    {
      path: "/search",
      name: "search",
      component: SearchPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/regist",
      name: "regist",
      component: RegistPage,
    },
  ],
});

export default router;
