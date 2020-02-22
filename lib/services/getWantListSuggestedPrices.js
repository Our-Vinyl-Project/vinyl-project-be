const getSuggestedPrices = require('./getSuggestedPrices');

const getWantListSuggestedPrices = (array) => {
  return Promise.all(array.map(async(item) => {
    const suggestedPrices = await getSuggestedPrices(item);
    return { id: item, ...suggestedPrices };
  }));
};

const dummyArray = [4282482, 1292887];

getWantListSuggestedPrices(dummyArray).then(console.log);
// we are currently getting an error message running this

module.exports = { getWantListSuggestedPrices };
