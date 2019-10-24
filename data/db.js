module.exports = function(){
    const mongoose = require('mongoose');
    const databaseName = 'hackumass';
    // var connectionString = 'mongodb://127.0.0.1/';
        //  connectionString += databaseName;
    var connectionString =
        'mongodb://heroku_qhv01j65:3o893igrn8omrp8l2lfgsq1ik0@ds339348.mlab.com:39348/heroku_qhv01j65';
    mongoose.connect(connectionString, { useNewUrlParser: true, useMongoClient: true});
};
