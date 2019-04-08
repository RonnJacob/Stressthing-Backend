const mongoose =  require('mongoose');
const NutritionistSchema = require('./nutritionist.schema.server')
const ChefSchema = require('./chef.schema.server')
const RegularUserSchema = require('./regularUser.schema.server')
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    userType:  {type: String, enum: ["REGULAR","CHEF","NUTRITIONIST"]},
    nutritionist: NutritionistSchema,
    chef: ChefSchema,
    regularUser: RegularUserSchema
}, {collection: 'users'});

module.exports = userSchema;
