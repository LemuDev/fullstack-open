const express = require("express")
const app = express()

const notesRoute = require("./controllers/note")

app.use("/api/notes", notesRoute)




module.exports = app
