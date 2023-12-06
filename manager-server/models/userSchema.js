const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const userSchema = mongoose.Schema({
    userId: Number,
    userName: String,
    password: String,
    state: {
        type: Number,
        default: 1 , // 1 在职  2  离职   3 试用期
    },
    job: String,
    sex: String,
    mobile: String,
    depId: [], // 部门
    role: {
        type: Number,
        default: 1   // 1 系统管理员   2 普通用户
    },
    roleList: [], // 系统角色
    createTime: {
        type: Date,
        default: new Date()
    },
    lastLoginTime: {
        type: Date,
        default: new Date()
    },
    articles:{
        type:Schema.Types.ObjectId,
        ref:"Article"
    }
})

module.exports = mongoose.model("User",userSchema,"users")