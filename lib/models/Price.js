const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  releaseId: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  'Very Good (VG)': {
    type: Number,
    required: true
  },
  'Good Plus (G+)': {
    type: Number,
    required: true
  },
  'Near Mint (NM or M-)': {
    type: Number,
    required: true
  },
  'Good (G)': {
    type: Number,
    required: true
  },
  'Very Good Plus (VG+)': {
    type: Number,
    required: true
  },
  'Mint (M)': {
    type: Number,
    required: true
  },
  'Fair (F)': {
    type: Number,
    required: true
  },
  'Poor (P)': {
    type: Number,
    required: true
  }
}
);

module.exports = mongoose.model('Price', priceSchema);
