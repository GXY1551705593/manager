const router = require('koa-router')();
const user = require("../models/userSchema.js");
const log4js = require("../utils/log4.js")
router.prefix('/users');

router.get("/login",async function(ctx,next){
  log4js.info(ctx.request)
})

module.exports = router
