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


app.get("/api/persons", (req, res)=>{
  return res.json(data)
})

app.get("/api/persons/:id", (req, res)=>{
  const notFoundResponse = {
    error: "not found 404"
  }

  let id = Number(req.params.id)


  if(typeof id != "number"){
    return res.status(404).json(notFoundResponse)
  }

  const query = data.filter(d => d.id == id)

  if(query.length == 0){
    return res.status(404).json(notFoundResponse)
  }


  return res.json(query)
})

app.delete("/api/persons/:id", (req, res)=>{
  const id = Number(req.params.id)

  const notFoundResponse = {
    error: "not found 404"
  }


  if(typeof id != "number"){
    return res.status(404).json(notFoundResponse)
  }

  const existsPerson = data.filter(d => d.id == id)
  if(existsPerson.length == 0){
    return res.status(404).json(notFoundResponse)
  }

  
  const query = data.filter(d => d.id !== id)
  data = query

  return res.json({error:`${existsPerson[0].name} - deleted successfully`})
})

app.post("/api/persons", (req, res)=>{
  const body = req.body

  const name = body.name
  const number = body.number

  if(!name || !number){
    return res.status(422).json({error: "all fields are required"})
  }
  
  const person = new Person({
    name: name, 
    number: number
  })

  person.save().then(result => mongoose.connection.close())

  return res.status(201).json({message: "user created successfully"})

})





app.listen(PORT, ()=>{
    console.log(`running on 127.0.0.1:${PORT}`)
})

