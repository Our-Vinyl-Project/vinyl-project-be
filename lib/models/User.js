const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  primaryDiscogsUsername: {
    type: String,
    required: true
  },
  currentWants: Array
});

module.exports = mongoose.model('User', userSchema);
