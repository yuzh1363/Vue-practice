import { createWebHistory, createRouter } from "vue-router";
import About from "./components/About.vue";
import Skill from "./components/Skill.vue";

const routes = [{ path: "/", name: "about", component: About },
  // { path: "/skill", name: "skill", component: Skill },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // 讓它平滑捲動，很有質感喔！
      }
    }
    return { top: 0 }
  },
});

export default router;
