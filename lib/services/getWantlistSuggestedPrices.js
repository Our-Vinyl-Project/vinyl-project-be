const getSuggestedPrices = require('./getSuggestedPrices');

const getWantlistSuggestedPrices = (array) => {
  return Promise.all(array.map(async(item) => {
    const suggestedPrices = await getSuggestedPrices(item);
    return { releaseId: item, timestamp: new Date,  ...suggestedPrices };
  }));
};

module.exports = { getWantlistSuggestedPrices };
