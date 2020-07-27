const express = require('express')
const comments = express.Router()

const Comment = require('../models/comment.js')


// INDEX ROUTE
comments.get('/', (req, res) => {
    console.log('hey')
    Comment.find({}, (err, foundComments) => {
    if (err) {
        res.status(400).json({ error: err.message })
    }
        res.status(200).json(foundComments)
    })
})

  // CREATE ROUTE
comments.post('/', async (req, res) => {
    console.log('hello')
    Comment.create(req.body, (error, createdComment) => {
    if (error) {
        res.status(400).json({ error: error.message })
    }
        res.status(200).send(createdComment) 
    })
})


module.exports = Comment