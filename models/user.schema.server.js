const mongoose =  require('mongoose');
const RegularUserSchema = require('./regularUser.schema.server')
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    regularUser: RegularUserSchema
}, {collection: 'users'});

module.exports = userSchema;
