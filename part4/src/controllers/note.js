const router = require("express").Router()
const note = require("../models/note")
const Note = require("../models/note")
const mongoose = require("mongoose")



router.get("/", async (req, res)=>{
    const note = await Note.find()
    return res.json(note)
})

router.post("/", async (req, res)=>{

    const body = req.body

    const content = body.content
    const important = body.important

    let errors = {}

    if(!content){
        errors.content = "this fields required"
    }
    if(typeof important != "boolean"){
        errors.important = "this fields must be a Boolean value"
    }

    if(Object.keys(errors).length > 0){
        return res.json({errors,})
    }


    const createNote = new Note({
        content: content, 
        important: important
    })

    createNote.save()

    return res.json({
        message: "Note created successfully"
    })
})

router.get("/:id", async (req, res)=>{
    const id = req.params.id
    const notFoundResponse = { error: "Error 404 not Found" }

    if(!mongoose.isValidObjectId(id) ){
        return res.status(404).json(notFoundResponse)
    }

    const note = await Note.findById(id)
    if(note == null){
        return res.status(404).json(notFoundResponse)
    }

    return res.json(note)
})


module.exports = router