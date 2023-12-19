const articleRoutes = [
    {
        path: '/layout',
        name: 'layout',
        meta: {title: '日报',permission: 'article'},
        component: () => import('../layout/index.vue'),
        children: [
            {
                path:'/add-article',
                name:'addArticle',
                meta: {title: '添加日报'},
                component: () => import('../views/article/AddArticle.vue')
            },
            {
                path:'/article-list',
                name:'articleList',
                meta: {title: '日报列表'},
                component: () => import('../views/article/ArticleList.vue')
            }
        ]
    }
]

export default articleRoutes