const mongoose = require('mongoose');
const RegularUserSchema = mongoose.Schema({
    favoriteRecipes: [{ type : ObjectId, ref: 'RecipeModel' }],
    ownRecipes: [{ type : ObjectId, ref: 'RecipeModel' }],
    ingredients: [{ type : ObjectId, ref: 'IngredientModel' }],
    rating: Number
});
module.exports = RegularUserSchema;
