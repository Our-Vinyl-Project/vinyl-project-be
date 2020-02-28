const getSuggestedPrices = require('./getSuggestedPrices');

const getSuggestedPricesFromUserWantsArray = (wants) => {
  return Promise.all(wants.map(async(want) => {
    const suggestedPrices = await getSuggestedPrices(want.id);
    return { id: want.id, ...suggestedPrices };
  }));
};

module.exports = { getSuggestedPricesFromUserWantsArray };
