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

// const dummy = {
//   releaseId: 1,
//   userName: 'Cat'
// },
// {
//   releaseId: 2,
//   userName: 'Dog'
// },
// {
//   releaseId: 3,
//   userName: 'Goose'
// }