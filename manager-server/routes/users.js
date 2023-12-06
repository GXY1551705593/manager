const router = require('koa-router')();
const User = require("../models/userSchema.js");
router.prefix('/users');

// 注册接口
router.post("/register",async function (ctx,next){
  const {name,password,confirmPsd,userId} = ctx.request.body;
  // 校验密码输入是否一致
  if (password !== confirmPsd){
    ctx.response.body = '密码输入不一致';
    return
  }

  // 检验是否是已有账号
  const findOneRes = await User.findOne({userName:name});
  if(findOneRes){
    ctx.response.body = '用户已存在，请更改用户名';
    return
  }

  // 注册新用户
  await User.create({userName:name,password,userId});
  ctx.response.body = '注册成功';
})

// 登录接口
router.get("/login",async function(ctx,next){
  const {userName,password} = ctx.request.query;
  const findOneData = User.findOne({userName,password})
  if (findOneData) {
    ctx.response.body = {
      status: 200,
      msg: '登录成功'
    }
  }
})

module.exports = router
