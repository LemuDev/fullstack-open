const router = require("express").Router()
const { default: mongoose } = require("mongoose")
const Blog = require("../models/blog")
const User = require("../models/user")


router.post("/", async (req, res)=>{
    const body = req.body
    const token = req.token

    const title = body.title
    const author = body.author
    const url = body.url
    const likes = body.likes


    console.log(token)

    let errors = {}


    if(!title){
        errors.title = "thi field is required"
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

    const user_by_username = await User.findOne({ username: token.username })

    const blog = new Blog({
        title: title,
        likes: likes,
        url: url,
        author: user_by_username
    })
    blog.save()

    return res.status(201).json({message: "Blog created successfully"})
})

router.get("/", async (req, res)=>{
    const blogs = await Blog.find({}).populate('author')

    return res.json(blogs)
})

router.get("/:id", async (req, res)=>{
    const id = req.params.id

    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({
            error: "Error 404 Non found"
        })
    }

    const blog = await Blog.findById(id)
    if(blog == null){
        return res.status(404).json({
            error: "Error 404 Non found"
        })
    }

    return res.json(blog)
})


router.delete("/:id", async (req, res)=>{
    const id = req.params.id
    console.log(!mongoose.isValidObjectId(id))
    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({
            error: "Error 404 Not found"
        })
    }

    const blog = await Blog.findById(id)
    console.log(blog)


    if(blog == null){
        return res.status(404).json({
            error: "Error 404 Not found"
        })
    }

    

    Blog.findByIdAndDelete(id).exec()

    return res.json({ message: "Blog deleted successfully" })
})


router.put("/:id", async(req, res) =>{
    const id = req.params.id

    const body = req.body
    
    const title = body.title
    const url = body.url
    const likes = body.likes

    let errors = {}


    if(!title){
        errors.title = "this field is required"
    }
    if(!url){
        errors.url = "this field is required"
    }
    if(!likes){
        errors.likes = "this field is required"
    }
    if(typeof likes != "number"){
        errors.likes = "this field must be a number"
    }


    if(Object.keys(errors).length > 0){
        return res.status(422).json(errors)    
    }

    const query = {_id: id}

    const blog = await Blog.findOne(query)
    blog.title = title
    blog.url = url
    blog.likes = likes
    blog.save()


    return res.json({
        message: "blog edited successfully"
    })
})

router.patch("/likes/:id", async (req, res)=>{
    const id = req.params.id

    const query = {_id: id}

    const blog = await Blog.findOne(query)
    
    if(blog == null){
        return res.status(404).json({
            error: "Error 404 Not found"
        })
    }

    const plusOne = Number(blog.likes) + 1
    blog.likes = plusOne
    blog.save()


    return res.json({
        message: "likes changed successfully"
    })
})


module.exports = router