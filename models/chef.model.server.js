const mongoose = require('mongoose');
const chefSchema = require('./chef.schema.server');
module.exports = mongoose.model('ChefModel', chefSchema)
