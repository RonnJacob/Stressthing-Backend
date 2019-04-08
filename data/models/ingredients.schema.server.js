const mongoose = require('mongoose')

const ingredientsSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    ownedBy: {type: Number, ref: 'UserModel'},
}, {collection: 'ingredients'});
module.exports = ingredientsSchema;
