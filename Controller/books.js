const express = require('express')
const book = express.Router()
const Books = require('../models/books.js')

// Index Route
book.get('/', (req, res) => {
  Books.find({}, (err, foundBooks) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundBooks)
  })
})

// Add a book
book.post('/add', async (req, res) => {
  console.log(req.body)
  Books.create(req.body, (err, createdBook) => {
    if (err) {
        res.status(400).json({error: error.message})
    }
        res.status(200).send(createdBook)
  })
})

module.exports = book