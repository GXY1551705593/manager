const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const articleSchema = mongoose.Schema({
    id: String,
    content: String,
    title: String,
    createTime: Date,
    authorId: String
})

module.exports = mongoose.model("Article",articleSchema,'articles')
