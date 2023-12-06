const router = require('koa-router')();
router.prefix('/article');
const Article = require("../models/articleSchema");

// 添加文章
router.post("/add",async function(ctx,next){
    const {title,content,authorId} = ctx.request.body;
    await Article.create({title, content, authorId, createTime: new Date()});
    ctx.response.body = "文章添加成功";
})

// 查询文章
router.post("/find",async function(ctx,next){
    const {authorId} = ctx.request.body;
    const res = await Article.find(authorId?{authorId}:{});
    ctx.response.body = {
        status: 200,
        data: res
    };
})


module.exports = router