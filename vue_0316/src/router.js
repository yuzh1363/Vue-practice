import { createWebHistory, createRouter } from "vue-router";


const routes = [
    {
        path: "/",
        name: "Default",
        component: () => import("./components/P10315.vue"),
    },
    {
        path: "/user/:userId",
        name: "user-profile",
        component: () => import("./components/UserProfile.vue"),
    },
    {
        path: "/fetchapi",
        name: "fetchapi",
        component: () => import("./components/fetchapi.vue"),
    },
    {
        path: "/apiuser/:id",
        name: "apiuser",
        component: () => import("./components/ApiUser.vue"),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router