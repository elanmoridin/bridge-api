let mongoose = require('mongoose')



let MoviesSchema = new mongoose.Schema({
    title: {type:String, required: true},
    year: {type:String, required: true},
    image: {type:String, required: true},
    genre: {type:String, required: true},
    plot: {type:String, required: true},
    user: {type: String},
    comments: {type: Array}
})



let Movies= mongoose.model('Movies', MoviesSchema)
module.exports = Movies