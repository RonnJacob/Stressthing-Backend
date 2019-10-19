const mongoose = require('mongoose');

const RegularUserSchema = mongoose.Schema({
    fitness: [{ type : String, ref: 'FitnessModel' }],
    stresser: [{ type : String, ref: 'StresserModel' }]
});
module.exports = RegularUserSchema;
