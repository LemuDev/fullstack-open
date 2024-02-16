const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

const config = require("./utils/config")


app.use(cors())
app.use(express.json())



// Mongoose connection
mongoose.set('strictQuery', false)

mongoose.connect(config.MONGO_URL)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.error('error connecting to MongoDB:', error.message)
    })

const blogRouter = require("./controllers/blog")


app.use("/api/blog", blogRouter)


module.exports = app
