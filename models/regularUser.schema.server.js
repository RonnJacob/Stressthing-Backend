const mongoose = require('mongoose');
const RegularUserSchema = mongoose.Schema({
    favoriteRecipes: [{ type : String, ref: 'RecipeModel' }],
    ownRecipes: [{ type : String, ref: 'RecipeModel' }],
    ingredients: [{ type : String, ref: 'IngredientModel' }],
    rating: Number
});
module.exports = RegularUserSchema;
