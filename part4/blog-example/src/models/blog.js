const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

})

const Blog = mongoose.model('Blog', blogSchema)


module.exports = Blog