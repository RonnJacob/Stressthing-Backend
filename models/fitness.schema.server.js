const mongoose = require('mongoose')

const fitnessSchema = mongoose.Schema({
    timestamp: String,
    activity: String,
    currentHeartRate: Number,
    restingHeartRate: Number,
    ownedBy: {type: String, ref: 'UserModel'},
}, {collection: 'fitness'});
module.exports = fitnessSchema;
