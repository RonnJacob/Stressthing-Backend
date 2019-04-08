const mongoose = require('mongoose');
const ingredientSchema = require('./ingredients.schema.server');
module.exports = mongoose.model('IngredientModel',ingredientSchema);
