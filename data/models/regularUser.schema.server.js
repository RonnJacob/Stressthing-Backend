const mongoose = require('mongoose');
const RegularUserSchema = mongoose.Schema({
    favoriteRecipes: [{ type : mongoose.Schema.Types.ObjectId, ref: 'RecipeModel' }],
    ownRecipes: [{ type : mongoose.Schema.Types.ObjectId, ref: 'RecipeModel' }],
    ingredients: [{ type : mongoose.Schema.Types.ObjectId, ref: 'IngredientModel' }],
    rating: Number
});
module.exports = RegularUserSchema;
