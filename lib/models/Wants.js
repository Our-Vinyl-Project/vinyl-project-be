const mongoose = require('mongoose');

const wantSchema = new mongoose.Schema({
  releaseId: {
    type: Number,
    required: true
  },
  wantedBy:[{ 
    type : mongoose.Types.ObjectId, 
    ref: 'User' }]
});

module.exports = mongoose.model('Want', wantSchema);
