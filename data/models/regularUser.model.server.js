const mongoose = require('mongoose');
const regularUserSchema = require('./regularUser.schema.server');
module.exports = mongoose.model('RegularUserModel', regularUserSchema)
