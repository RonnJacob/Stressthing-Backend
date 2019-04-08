const mongoose = require('mongoose');
const NutritionistSchema = mongoose.Schema({
    endorsedRecipes: [{ type : ObjectId, ref: 'RecipeModel' }],
    appointmentLink: String
});
module.exports = NutritionistSchema;
