require('dotenv').config();

const mongoose = require('mongoose')
const url = process.env.MONGO_URL

console.log(url)

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: Number,
})


module.exports =  mongoose.model('Person', personSchema)
