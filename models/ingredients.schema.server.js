const mongoose = require('mongoose')

const ingredientsSchema = mongoose.Schema({
    name: String,
    units: Number,
    ownedBy: {type: String, ref: 'UserModel'},
}, {collection: 'ingredients'});
module.exports = ingredientsSchema;
