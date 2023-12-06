const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const articleSchema = mongoose.Schema({
    id: String,
    content: String,
    title: String,
    createTime: Date,
    userName: {
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

module.exports = mongoose.model("Article",articleSchema,'articles')
