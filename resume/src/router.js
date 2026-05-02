import { createWebHistory, createRouter } from "vue-router";
import About from "./components/About.vue";
import Skill from "./components/Skill.vue";

const routes = [{ path: "/about", name: "about", component: About },
  { path: "/skill", name: "skill", component: Skill },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
