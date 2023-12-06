const router = require('koa-router')();
router.prefix('/article');
const Article = require("../models/articleSchema");
const User = require("../models/userSchema");

router.post("/add",async function(ctx,next){
    const {title,content} = ctx.request.body;
    const createRes = Article.create({title,content})
    console.log('createRes ===',createRes)
    ctx.response.body = "文章添加成功"
})

router.post("/find",async function(ctx,next){
    const {userName} = ctx.request.body;
    await User.findOne({userName}).populate({path:"Article",select:"title"}).then((err, data) => {
        console.log('err,data ===', err, data)
    })
    ctx.response.body = "文章查询成功"
})


module.exports = router