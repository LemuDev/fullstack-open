const express = require("express")
const config = require("./utils/config")
const logger = require("./utils/logger")
const req_middleware = require("./utils/middlewares/request")
const mongoose = require('mongoose')

// ----------------------------------------------------------------------------

const app = express()

// Mongoose connection
mongoose.set('strictQuery', false)
logger.info('connecting to DB')

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })
const notesRoute = require("./controllers/note")




// Middlewares
app.use(req_middleware.requestLogger)


// Routers
app.use("/api/notes", notesRoute)

// 404 Middleware
app.use(req_middleware.unknownEndpoint)
app.use(req_middleware.errorHandler)

module.exports = app
