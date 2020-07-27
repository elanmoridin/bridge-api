let express = require('express');
let hoops = express.Router();
let NBAController = require('./nba');

hoops.route('/updates').get(NBAController);
module.exports = hoops;