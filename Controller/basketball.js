let express = require('express');
let hoops = express.Router();
let NBAController = require('./NBA');

hoops.route('/updates').get(NBAController);
module.exports = hoops;