import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../js/components/Home.vue'
import Users from '../js/components/Users.vue'
const routes = [

    {
        path: '/',
        name: 'dashboard',
        component: Home
    },
    {
        path: '/users',
        name: 'users',
        component: Users
    }
   

];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
});

export default router;