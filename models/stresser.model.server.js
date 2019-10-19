const mongoose = require('mongoose');
const stresserSchema = require('./stresser.schema.server');
module.exports = mongoose.model('StresserModel',stresserSchema);
