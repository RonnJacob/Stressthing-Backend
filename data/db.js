module.exports = function(){
    const mongoose = require('mongoose');
    const databaseName = 'hackumass';
    var connectionString = 'mongodb://127.0.0.1/';
         connectionString += databaseName;
    // var connectionString =
        // 'mongodb://heroku_xkx7wdmr:3fhd03cse9lkkgoe1t0s8nnopb@ds145456.mlab.com:45456/heroku_xkx7wdmr';
    mongoose.connect(connectionString, { useNewUrlParser: true});
};
