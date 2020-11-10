//----------------->
// Dependencies
let express = require('express')
let app = express()
let PORT = process.env.PORT || 3003
let cors = require('cors')
let mongoose = require('mongoose')
let bodyParser = require('body-parser');
//------------------>

//Database
//------------------->
// Connection Info and error handling
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod Ready and Running Baby?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))
// database connection variable
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bridge'
// database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to Big Goose...')
})
//-------------------->

//middleware 
app.use(express.json())
app.use(bodyParser.json())
const whitelist = ['http://localhost:3000', 'https://bridge-app-react.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
 
app.use(cors(corsOptions))

//Bridge CONTROLLER
let bridgeController=require('./Controller/bridge.js')
app.use('/bridge', bridgeController)

//User CONTROLLER
let userController=require('./Controller/users_controller.js')
app.use('/users', userController)

//NBA Controller
let hoops = require('./Controller/basketball.js');
app.use('/api/v1', hoops);

//Movies CONTROLLER
let moviesController=require('./Controller/movies.js')
app.use('/movies', moviesController)

//Books CONTROLLER
let booksController=require('./Controller/books.js')
app.use('/books', booksController)

//Music CONTROLLER
let musicController=require('./Controller/music.js')
app.use('/music', musicController)



app.listen(PORT, () => {
  console.log('listening on port:', PORT)
})
