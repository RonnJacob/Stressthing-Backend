const mongoose = require('mongoose');
const databaseName = 'recipe-box';
var connectionString = 'mongodb://localhost/';
connectionString += databaseName;
mongoose.connect(connectionString, { useNewUrlParser: true });
