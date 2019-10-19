const mongoose = require('mongoose');
const fitnessSchema = require('./fitness.schema.server');
module.exports = mongoose.model('FitnessModel',fitnessSchema);
