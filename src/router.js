import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import AdminPage from "@/views/AdminPage.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: HomePage,
        name: "home"
    },
    {
        path: "/login",
        component: LoginPage,
        name: "login"
    },
    {
        path: "/admin/:id",
        component: AdminPage,
        name: "admin"
    },
];

const router = new VueRouter({
    mode: "history",
    // base: process.env.BASE_URL,
    routes
});

export default router;
