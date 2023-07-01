import Vue from 'vue';
import VueRouter from 'vue-router';

import TraditionalForm from '@/views/TraditionalForm';
import VueForm from '@/views/VueForm';
import UsersList from '@/views/UsersList';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: TraditionalForm,
        name: "home"
    },
    {
        path: "/vue-form",
        component: VueForm,
        name: "vue-form"
    },
    {
        path: "/users",
        component: UsersList,
        name: "users"
    },
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;