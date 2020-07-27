const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/user.js')

// SHOW ROUTE for new users //
users.post('/login', (req, res) => {

  console.log(req.body)
  
  User.findOne({ username: req.body.username}, (err, foundUser) => {
    console.log(foundUser)
    if (!foundUser) {
        res.status(400).json({error: message})
        // need to send back a no found user
    } else {
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            res.status(200).json(foundUser) 
        } else {
           //needs to say failed password match
        }
    }
  })

})

users.delete('/delete', (req, res) => {
  User.findOne({username: req.body.username}, (err, foundUser) => {
    console.log(foundUser)
    User.findByIdAndDelete(foundUser.id, (err, data) => {
      
  })

  })
})

// Sign up route
users.post('/signup', async (req, res) => {
  //overwrite the user password with the hashed password, then pass that in to our database
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  console.log(req.body)
  User.create(req.body, (err, createdUser) => {
    if (err) {
        res.status(400).json({error: error.message})
    }
        res.status(200).send(createdUser)
  })
})

module.exports = users
