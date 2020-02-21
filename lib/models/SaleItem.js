const mongoose = require('mongoose');

const saleItemSchema = new mongoose.Schema({
  releaseId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  conditionSleeve: {
    type: String,
    required: true
  },
  conditionMedia: {
    type: String,
    required: true
  },
  seller: {
    type: String,
    required: true
  },
  shipsFrom: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  releaseLink: {
    type: String,
    required: true
  },
  saleIdLink: {
    type: String,
    required: true
  }
}
);

module.exports = mongoose.model('SaleItem', saleItemSchema);