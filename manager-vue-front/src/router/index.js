import {createRouter,createWebHashHistory} from "vue-router";
import articleRoutes from "@/router/article.js";

const routes = [
    ...articleRoutes,
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: "/login",
        name: "Login",
        meta:{title: "登录"},
        component: () => import('@/views/login/index.vue'),
        props: {pageType:'login'}
    },
    {
        path: "/register",
        name: "Register",
        meta:{title: "注册"},
        component: () => import('@/views/login/index.vue'),
        props: {pageType:'register'}
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router