const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  color: String,
  index: String,
  isOn: Boolean
});

const Led = mongoose.model('Led', schema);

module.exports = Led;
