const mongoose = require('mongoose');
const NutritionistSchema = mongoose.Schema({
    endorsedRecipes: [{ type : String, ref: 'RecipeModel' }],
    appointmentLink: String
});
module.exports = NutritionistSchema;
