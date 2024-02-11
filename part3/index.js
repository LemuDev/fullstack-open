const express = require('express')

const app = express()

const PORT = 3000

const data = [
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
  const id = req.params.id
  const query = data.filter(d => d.id == id)

  return res.json(query)
})




app.listen(PORT, ()=>{
    console.log(`running on 127.0.0.1:${PORT}`)
})

