const mongoose = require('mongoose');
const ChefSchema = mongoose.Schema({
    endorsedRecipes: [{ type : ObjectId, ref: 'RecipeModel' }],
    ownRecipes: [{ type : ObjectId, ref: 'RecipeModel' }],
    blogPost: String
});
module.exports = ChefSchema;
