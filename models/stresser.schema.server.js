const mongoose = require('mongoose')

const stresserSchema = mongoose.Schema({
    cause: String,
    count: Number,
    ownedBy: {type: String, ref: 'StresserModel'},
}, {collection: 'stresser'});
module.exports = stresserSchema;
