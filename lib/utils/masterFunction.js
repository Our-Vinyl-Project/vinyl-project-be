const getWantlist = require('../services/getWantList');
const getSuggestedPrices = require('../services/getSuggestedPrices');
const { marketplaceSearch } = require('../utils/getSaleItems');
const { suggestedPricealyzer } = require('../utils/suggestedPricealyzer');

const masterFunction = async(userid) => {
  const wantlist = await getWantlist(userid);
  
  //add new wants to prices db

  const masterArray = await Promise.all (wantlist.map(async({ id }) => {
    try {
      const [suggestedPrices, saleItems] = await Promise.all ([
        getSuggestedPrices(id),
        marketplaceSearch('release', id)
      ]);
      const saleItemsWithSuggestedPrices = 
        saleItems.listing.map(saleItem => 
          suggestedPricealyzer(saleItem, suggestedPrices)
        );
      console.log(saleItemsWithSuggestedPrices);
      return saleItemsWithSuggestedPrices;
    } catch(error) {
      console.log(error);
    }
  }));

  const flatArray = masterArray.flat();

  // aggregate number available by condition
  const availabilityLookup = flatArray.reduce((acc, saleItem) => {
    acc[saleItem.release_id] ?
      acc[saleItem.release_id] = acc[saleItem.release_id] +  1 :
      acc[saleItem.release_id] = 1;
    return acc;
  }, {});

  flatArray.forEach(saleItem =>
    saleItem.num_available = availabilityLookup[saleItem.release_id]);

  return flatArray;
};

module.exports = masterFunction;
