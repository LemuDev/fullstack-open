const router = require("express").Router()
const Note = require("../models/note")


router.get("/", async(req, res)=>{
    const note = await Note.find()
    return res.json(note)
})




module.exports = router