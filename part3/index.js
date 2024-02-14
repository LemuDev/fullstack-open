const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./mongo')
const mongoose = require('mongoose')


const app = express()
const data = []

const PORT = 3000

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


app.get("/api/persons", async (req, res)=>{
  const persons = await Person.find()
  return res.json(persons)
})

app.get("/api/persons/:id", async (req, res)=>{
  const notFoundResponse = {
    error: "not found 404"
  }

  let id = req.params.id


  if(!mongoose.isValidObjectId(id)){
    return res.status(404).json(notFoundResponse)
  }
  
  const person = await Person.findById(id);
  
  if(person === null){
    return res.status(404).json(notFoundResponse)
  }

  return res.json(person)


})

app.delete("/api/persons/:id", async(req, res)=>{
  const id = req.params.id

  const notFoundResponse = {
    error: "not found 404"
  }

  if(!mongoose.isValidObjectId(id)){
    return res.status(404).json(notFoundResponse)
  }
  
  const person = await Person.findById(id);
  
  if(person === null){
    return res.status(404).json(notFoundResponse)
  }

  Person.findByIdAndDelete(id).exec()

  return res.json({error: "deleted successfully"})
})

app.post("/api/persons", async(req, res)=>{
  const body = req.body

  const name = body.name
  const number = body.number


  if(!name || !number){

    return res.status(422).json({error: "all fields are required"})
  }
  
  const existsPerson = await Person.findOne({name: name})
  

  if(existsPerson != null){
    return res.status(400).json({
      error: "This person already exists"
    })
  }

  const createPerson = new Person({
    name, 
    number
  })
  createPerson.save()
  return res.status(201).json({message: "user created successfully"})

})





app.listen(PORT, ()=>{
    console.log(`running on 127.0.0.1:${PORT}`)
})

