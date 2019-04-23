module.exports = function(){
    const mongoose = require('mongoose');
    const databaseName = 'recipe-box';
    // var connectionString = 'mongodb://localhost/';
    //     connectionString += databaseName;
    var connectionString =
        'mongodb://heroku_xkx7wdmr:3fhd03cse9lkkgoe1t0s8nnopb@ds145456.mlab.com:45456/heroku_xkx7wdmr';
    mongoose.connect(connectionString, { useNewUrlParser: true, useMongoClient: true });
};
