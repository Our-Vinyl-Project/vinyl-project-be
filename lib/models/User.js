const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  discogUserName: {
    type: String,
    required: true
  },
  wantlist: Array,
  }

);

module.exports = mongoose.model('User', userSchema);

