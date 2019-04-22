const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ChefSchema = mongoose.Schema({
    endorsedRecipes: [{ type : String, ref: 'RecipeModel' }],
    ownRecipes: [{ type : String, ref: 'RecipeModel' }],
    blogPost: String
});
module.exports = ChefSchema;
