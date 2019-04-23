const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    name: String,
    ownedBy: {type: String, ref: 'UserModel'},
    steps: String,
    endorsedByChef: [{type: String, ref: 'UserModel'}],
    endorsedByNutritionist: [{type: String, ref: 'UserModel'}],
    image: String,
    category: String,
    ingredients: [{type: String}]
}, {collection: 'recipes'});
module.exports = recipeSchema;
