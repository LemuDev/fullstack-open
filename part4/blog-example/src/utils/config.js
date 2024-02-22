require('dotenv').config()

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

module.exports = {
    PORT,
    MONGO_URL,
     JWT_SECRET_KEY
}