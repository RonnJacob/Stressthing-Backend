const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    name: String,
    ownedBy: {type: ObjectId, ref: 'UserModel'},
    steps: String,
    endorsedByChef: [{type: ObjectId, ref: 'UserModel'}],
    endorsedByNutritionist: [{type: ObjectId, ref: 'UserModel'}],
    image: String,
    ingredients: [{type: ObjectId, ref: 'IngredientModel'}]
}, {collection: 'recipes'});
module.exports = recipeSchema;
