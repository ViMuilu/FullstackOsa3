/* eslint-disable no-unused-vars */

const http = require('http')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'))
require('dotenv').config()
// let persons = [
//   {
//     'name': 'Arto Hellas',
//     'number': '040-123456',
//     'id': 1
//   },
//   {
//     'name': 'Ada Lovelace',
//     'number': '39-44-5323523',
//     'id': 2
//   },
//   {
//     'name': 'Dan Abramov',
//     'number': '12-43-234345',
//     'id': 3
//   },
//   {
//     'name': 'Mary Poppendieck',
//     'number': '39-23-6423122',
//     'id': 4
//   }
// ]
const Person = require('./models/person')

app.get('/api/persons', (req, res) => {
  Person.find({}).then(people => {
    res.json(people)
  })
})
app.get('/info', (req, res) => {
  Person.count({}, function (err, count) {
    res.send(`<p>Phondebook has ${count} people</p>
     <p> ${new Date()}</p>`
    )
  })



})
app.put('/api/persons/:id', (request, response, next) => {

  const body = request.body
  const person = {
    'name': body.name,
    'number': body.number,
  }
  Person.findByIdAndUpdate(request.params.id, person)
    .then(updatedPerson => {
      response.json(person)
    })
    .catch(error => next(error))

})
app.get('/api/persons/:id', (request, response, next) => {
  // const id = Number(request.params.id)
  // const person = persons.find(person => person.id === id)
  // if (person) {
  //     response.json(person)
  // } else {
  //     response.status(404).end()
  // }

  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))

})

app.delete('/api/persons/:id', (request, response, next) => {
  // const id = Number(request.params.id)
  // persons = persons.filter(person => person.id !== id)

  // response.status(204).end()
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))

})
// const generateId = () => {
//     const maxId = persons.length > 0
//         ? Math.max(...persons.map(n => n.id))
//         : 0
//     return maxId + 1
// }

app.post('/api/persons', (request, response, next) => {

  const body = request.body
  if (!body.name || !body.number) {
    return response.status(400).json({ error: 'content missing' })
  }

  const person = new Person({
    'name': body.name,
    'number': body.number,
  })
  // if (persons.find(person => person.name === body.name)) {
  //     return response.status(404).json({
  //         error: 'Name allready in use'
  //     })
  // }

  person.save()
    .then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => next(error))

})

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}
app.use(errorHandler)
// eslint-disable-next-line no-undef
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



