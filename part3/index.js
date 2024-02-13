const express = require('express')
const morgan = require('morgan')
const cors = require('cors')



const app = express()


const PORT = 3000

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

let data = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get("/info", (req, res)=>{
  const date = new Date()


  return res.send(
  `
    <p>phonebook has info to ${Object.keys(data).length} persons</p>
    <p>${date}</p>
  `
  )
})


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

  const randomId = Math.floor(Math.random() * 10000000)

  if(name.length == 0 || number.length == 0){

    return res.status(422).json({error: "all fields are required"})
  }
  
  const existsPerson = data.filter(p => p.name == name)

  if(existsPerson.length != 0 ){
    return res.status(400).json({ error: 'name must be unique' })
  }

  data.push({
    id: randomId,
    name, 
    number
  })

  return res.status(201).json({message: "user created successfully"})

})





app.listen(PORT, ()=>{
    console.log(`running on 127.0.0.1:${PORT}`)
})

