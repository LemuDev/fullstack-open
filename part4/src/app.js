const express = require("express")
const req_middleware = require("./utils/middlewares/request")

const app = express()

const notesRoute = require("./controllers/note")


// Routers
app.use("/api/notes", notesRoute)




// Middlewares
app.use(req_middleware.errorHandler)
app.use(req_middleware.requestLogger)
app.use(req_middleware.unknownEndpoint)


module.exports = app
