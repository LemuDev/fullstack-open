const router = require("express").Router()
const Blog = require("../models/blog")


router.post("/", async (req, res)=>{
    const body = req.body
    
    const title = body.title
    const author = body.author
    const url = body.url
    const likes = body.likes

    let errors = {}


    if(!title){
        errors.title = "thi field is required"
    }
    if(!author){
        errors.author = "thi field is required"
    }
    if(!url){
        errors.url = "thi field is required"
    }
    if(!likes){
        errors.likes = "thi field is required"
    }
    if(typeof likes != "number"){
        errors.likes = "thid field must be a number"
    }


    if(Object.keys(errors).length > 0){
        return res.status(422).json(errors)    
    }
    
    const blog = new Blog({
        title: title,
        author: author,
        likes: likes,
        url: url
    })
    blog.save()

    return res.json({message: "Blog created successfully"})
})

router.get("/", async (req, res)=>{
    const blogs = await Blog.find()

    return res.json(blogs)
})


module.exports = router