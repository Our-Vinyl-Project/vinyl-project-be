const mongoose = require('mongoose');

const releaseSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  masterId: {
    type: Number,
    required: true
  },
  releaseId: {
    type: Number,
    required: true
  },
  coverImgUrl: {
    type: String,
    required: true
  }
}
);

module.exports = mongoose.model('Release', releaseSchema);
