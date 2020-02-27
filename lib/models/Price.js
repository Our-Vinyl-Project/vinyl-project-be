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
    currency: { 
      type: String,
      required: true
    },
    value: { 
      type: Number,
      required: true
    }
  },
  'Good Plus (G+)': {
    currency: { 
      type: String,
      required: true
    },
    value: { 
      type: Number,
      required: true
    }
  },
  'Near Mint (NM or M-)': {
    currency: { 
      type: String,
      required: true
    },
    value: { 
      type: Number,
      required: true
    }
  },
  'Good (G)': {
    currency: { 
      type: String,
      required: true
    },
    value: { 
      type: Number,
      required: true
    }
  },
  'Very Good Plus (VG+)': {
    currency: { 
      type: String,
      required: true
    },
    value: { 
      type: Number,
      required: true
    }
  },
  'Mint (M)': {
    currency: { 
      type: String,
      required: true
    },
    value: { 
      type: Number,
      required: true
    }
  },
  'Fair (F)': {
    currency: { 
      type: String,
      required: true
    },
    value: { 
      type: Number,
      required: true
    }
  },
  'Poor (P)': {
    currency: { 
      type: String,
      required: true
    },
    value: { 
      type: Number,
      required: true
    }
  }
}
);

module.exports = mongoose.model('Price', priceSchema);
