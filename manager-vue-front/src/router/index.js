import {createRouter,createWebHashHistory} from "vue-router";

const routes = [
    {
        path:'/add-article',
        name:'addArticle',
        component: () => import('../views/article/addArticle.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router