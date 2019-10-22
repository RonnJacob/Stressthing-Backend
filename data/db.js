module.exports = function(){
    const mongoose = require('mongoose');
    const databaseName = 'hackumass';
    var connectionString = 'mongodb://127.0.0.1/';
         connectionString += databaseName;
    // var connectionString =
        // 'mongodb://heroku_ws4h5k2l:5g3ik06q8aujjo1d4fuq15grfl@ds253871.mlab.com:53871/heroku_ws4h5k2l';
    mongoose.connect(connectionString, { useNewUrlParser: true});
};
