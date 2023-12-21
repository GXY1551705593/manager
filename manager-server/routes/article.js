const router = require('koa-router')();
router.prefix('/article');
const Article = require("../models/articleSchema");
const {getSuccessRes,getErrorRes,getPageSuccessRes} = require("../utils/response.js");
// 添加文章
router.post("/add",async function(ctx){
    const {title,content,authorId} = ctx.request.body;
    const res = await Article.create({title, content, authorId, createTime: new Date()});
    if (res) {
        ctx.response.body = getSuccessRes(res,'添加成功');
    } else {
        ctx.response.body = getErrorRes(404,'添加失败');
    }
})

// 查询文章
router.post("/find",async function(ctx){
    let {authorId,pageIndex,pageSize} = ctx.request.body;
    pageIndex = Number(pageIndex);
    if (pageSize) {
        pageSize = Number(pageSize);
    } else {
        pageSize = 10
    }
    let res = await Article.find(authorId?{authorId}:{});
    res = res.sort((a,b)=> new Date(b.createTime) - new Date(a.createTime));
    if (res) {
        const pageData = res.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
        ctx.response.body = getPageSuccessRes(pageData,res.length,'查询成功');
    } else {
        ctx.response.body = getErrorRes(404,'查询失败');
    }
})

// 更新文章数据
router.post('/update',async function(ctx){
    const {id,content,title,createTime} = ctx.request.body;
    const res = await Article.findByIdAndUpdate(id,{content,title,createTime},{new:true});
    if (res) {
        ctx.response.body = getSuccessRes(res,'更新文章信息成功');
    } else {
        ctx.response.body = getErrorRes(404,'更新文章信息失败');
    }
})

module.exports = router