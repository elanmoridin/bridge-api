const express = require('express')
const music = express.Router()
const Songs = require('../models/music.js')

// Index Route
music.get('/', (req, res) => {
  Songs.find({}, (err, foundSongs) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundSongs)
  })
})

// Add a song
music.post('/add', async (req, res) => {
  console.log(req.body)
  Songs.create(req.body, (err, createdSong) => {
    if (err) {
        res.status(400).json({error: error.message})
    }
        res.status(200).send(createdSong)
  })
})

module.exports = music