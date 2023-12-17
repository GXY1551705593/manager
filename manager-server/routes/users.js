const router = require('koa-router')();
const User = require("../models/userSchema.js");
router.prefix('/user');
const {getSuccessRes,getErrorRes} = require("../utils/response.js");

// 注册接口
router.post("/register",async function (ctx){
  const {userName,password,confirmPsd,userId} = ctx.request.body;
  // 校验密码输入是否一致
  if (password !== confirmPsd){
    ctx.response.body = getSuccessRes(null,'密码输入不一致');
    return
  }

  // 检验是否是已有账号
  const findOneRes = await User.findOne({userName:name});
  if(findOneRes){
    ctx.response.body = getSuccessRes(null,'注册账号已存在');
    return
  }

  // 注册新用户
  await User.create({userName,password,userId});
  ctx.response.body = getSuccessRes(null,'注册成功');
})

// 登录接口
router.get("/login",async function(ctx){
  const {userId,password} = ctx.request.query;
  const findOneData = await User.findOne({userId,password});
  if (findOneData) {
    const data = {
      userId: findOneData.userId,
      createTime: findOneData.createTime,
      userName: findOneData.userName,
      lastLoginTime: new Date()
    }
    ctx.response.body = getSuccessRes(data,'登录成功');
  } else {
    ctx.response.body = getErrorRes(null,'登录失败');
  }
})

module.exports = router
