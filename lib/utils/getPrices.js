const { getWantlistSuggestedPrices } = require('../services/getWantlistSuggestedPrices');
const Want = require('../models/Wants');
const Price = require('../models/Price');

const getPrices = async() => {
  const currentWantsArray = await Want.find().select({
    releaseId: true,
    _id: false
  });
  const idsArray = currentWantsArray.map(want => want.releaseId);
  const currentPrices = await getWantlistSuggestedPrices(idsArray);
  Price.insertMany([...currentPrices]);

  return currentPrices;
};

module.exports = { getPrices };
