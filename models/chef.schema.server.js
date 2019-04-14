const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ChefSchema = mongoose.Schema({
    endorsedRecipes: [{ type : Schema.Types.ObjectId, ref: 'RecipeModel' }],
    ownRecipes: [{ type : Schema.Types.ObjectId, ref: 'RecipeModel' }],
    blogPost: String
});
module.exports = ChefSchema;
