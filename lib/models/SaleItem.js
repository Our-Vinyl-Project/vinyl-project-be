const mongoose = require('mongoose');

const saleItemSchema = new mongoose.Schema({
  masterId: {
    type: Number,
    required: true
  },
  saleId: {
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
  label: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    required: true
  },
  sellPrice: {
    type: Number,
    required: true
  },
  shipping: {
    type: Number,
    required: false
  },
  currency: {
    type: String,
    required: false
  }
  
}
);

module.exports = mongoose.model('SaleItem', saleItemSchema);