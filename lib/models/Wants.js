const mongoose = require('mongoose');

const wantsSchema = new mongoose.Schema({
  releaseId: {
    type: Number,
    required: true
  },
  userName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Want', wantsSchema);
