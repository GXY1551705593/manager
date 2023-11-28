const mongoose = require("mongoose");
const config = require("./index");
const log4js = require("../utils/log4.js");
mongoose.set("strictQuery",false)

async function main () {
    await mongoose.connect(config.URL)
}

main().then(res=>{
    log4js.info('****数据库连接成功*****',res)
}).catch(err=>{
    log4js.error(err)
})