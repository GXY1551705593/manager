const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    content: String,
    title: String,
    createTime: Date,
    authorId: String
})

module.exports = mongoose.model("Article",articleSchema,'articles')
