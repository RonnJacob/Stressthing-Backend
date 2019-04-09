const mongoose = require('mongoose');
const NutritionistSchema = mongoose.Schema({
    endorsedRecipes: [{ type : mongoose.Schema.Types.ObjectId, ref: 'RecipeModel' }],
    appointmentLink: String
});
module.exports = NutritionistSchema;
