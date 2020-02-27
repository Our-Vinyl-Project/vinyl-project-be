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
      required: false
    },
    value: { 
      type: Number,
      required: false
    }
  },
  'Good Plus (G+)': {
    currency: { 
      type: String,
      required: false
    },
    value: { 
      type: Number,
      required: false
    }
  },
  'Near Mint (NM or M-)': {
    currency: { 
      type: String,
      required: false
    },
    value: { 
      type: Number,
      required: false
    }
  },
  'Good (G)': {
    currency: { 
      type: String,
      required: false
    },
    value: { 
      type: Number,
      required: false
    }
  },
  'Very Good Plus (VG+)': {
    currency: { 
      type: String,
      required: false
    },
    value: { 
      type: Number,
      required: false
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
      required: false
    },
    value: { 
      type: Number,
      required: false
    }
  },
  'Poor (P)': {
    currency: { 
      type: String,
      required: false
    },
    value: { 
      type: Number,
      required: false
    }
  }
}
);

module.exports = mongoose.model('Price', priceSchema);
