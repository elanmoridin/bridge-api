const express = require('express')
const movie = express.Router()
const Movies = require('../models/movies.js')

// Index Route
movie.get('/', (req, res) => {
    Movies.find({}, (err, foundMovies) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundMovies)
    })
  })


// Add a movie
movie.post('/add', async (req, res) => {
  console.log(req.body)
  Movies.create(req.body, (err, createdUser) => {
    if (err) {
        res.status(400).json({error: error.message})
    }
        res.status(200).send(createdUser)
  })
})

module.exports = movie