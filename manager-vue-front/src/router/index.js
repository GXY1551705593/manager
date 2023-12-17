import {createRouter,createWebHashHistory} from "vue-router";

const routes = [
    {
        path:'/add-article',
        name:'addArticle',
        meta: {title: '添加日报'},
        component: () => import('../views/article/addArticle.vue')
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