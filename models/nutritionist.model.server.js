const mongoose = require('mongoose');
const nutritionistSchema = require('./nutritionist.schema.server');
module.exports = mongoose.model('NutritionistModel', nutritionistSchema)
