const { getSuggestedPrices } = require('./getSuggestedPrices');

const getWantlistSuggestedPrices = (array) => {
  return Promise.all(array.map(async(item) => {
    const suggestedPrices = await getSuggestedPrices(item);
    return { id: item, ...suggestedPrices };
  }));
};

module.exports = { getWantlistSuggestedPrices };

// getWantlistSuggestedPrices([4282482, 1292887]).then(console.log);

