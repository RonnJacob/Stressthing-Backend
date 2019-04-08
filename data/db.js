const mongoose = require('mongoose');
const databaseName = 'white-board';
var connectionString = 'mongodb://localhost/';
connectionString += databaseName;
mongoose.connect('mongodb://heroku_w63skhr5:qdes5uqp45b85b6tbgq8jrp5m9@ds131676.mlab.com:31676/heroku_w63skhr5', { useNewUrlParser: true });
