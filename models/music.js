let mongoose = require('mongoose')



let songSchema = new mongoose.Schema({
    artist: {type:String},
    track: {type:String},
    preview: {type:String},
    albumCover: {type:String},
    album: {type:String},
    user: {type: String}
})



let Songs= mongoose.model('Songs', songSchema)
module.exports = Songs