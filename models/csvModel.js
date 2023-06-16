const mongoose = require('mongoose');

const csvSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

module.exports = mongoose.model('CSV', csvSchema);
