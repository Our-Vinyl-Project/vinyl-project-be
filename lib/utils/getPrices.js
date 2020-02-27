// import getWantlistSuggestedPrices from '../services/getWantlistSuggestedPrices';
// const getSuggestedPrices = require('../services/getSuggestedPrices');
const Want = require('../models/Wants');
// const Price = require('../models/Price');
// const mongoose = require('mongoose');


const getPrices = async() => {

  const currentWantsArray = await Want.find().select({
    releaseId: true,
    _id: false
  })
    .then(wants => wants.map(want => want.releaseId));


  // const insertDocuments = function(db, callback) {
  //   // Get the documents collection
  //   const collection = db.collection('documents');
  //   // Insert some documents
  //   collection.insertMany([
  //     {a : 1}, {a : 2}, {a : 3}
  //   ], function(err, result) {
  //     assert.equal(err, null);
  //     assert.equal(3, result.result.n);
  //     assert.equal(3, result.ops.length);
  //     console.log("Inserted 3 documents into the collection");
  //     callback(result);
  //   });
  // }

  // const wantsArray = wantsCursor.toArray();
  // wantsCursor.map((i) => Price.insertMany([...i]));
  // wantsCursor.map(async({ releaseId }) => getSuggestedPrices(releaseId).then(await(Price.insertOne(releaseId))
  //   .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
  //   .catch(err => console.error(`Failed to insert item: ${err}`))
  // ));
  
  return currentWantsArray;
};
//   const getCurrentPrices = (wantsArray) => {
//     const prices = getWantlistSuggestedPrices(wantsArray).then(prices.map((item) => {
//       Price.insertMany([...item]);
//     }));
//   }
//   return getCurrentPrices;
// };
module.exports = { getPrices };









