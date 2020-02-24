const getSuggestedPrices = require('./getSuggestedPrices');

const getSuggestedPricesFromUserWantsArray = (array) => {
  return Promise.all(array.map(async(item) => {
    const suggestedPrices = await getSuggestedPrices(item);
    return { id: item, ...suggestedPrices };
  }));
};

module.exports = { getSuggestedPricesFromUserWantsArray };
