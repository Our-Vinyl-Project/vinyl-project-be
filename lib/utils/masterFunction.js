const getWantlist = require('../services/getWantList');
const getSuggestedPrices = require('../services/getSuggestedPrices');
const { marketplaceSearch } = require('../utils/getSaleItems');
const suggestedPricealyzer = require('../utils/suggestedPricealyzer');

const masterFunction = async(userid) => {
  const wantlist = await getWantlist(userid);
  // console.log(wantlist);
  const masterArray = await Promise.all (wantlist.map(async({ id }) => {
    const [suggestedPrices, saleItems] = await Promise.all ([
      getSuggestedPrices(id),
      marketplaceSearch('release', id)
    // const suggestedPrices = await getSuggestedPrices(id);
    // console.log(suggestedPrices);
    // const saleItems = await marketplaceSearch('release', id);
    // console.log(saleItems);
    ]);
    const saleItemsWithSuggestedPrices = 
      saleItems.listing.map(saleItem => 
        suggestedPricealyzer(saleItem, suggestedPrices)
      );
      
    // console.log(saleItemsWithSuggestedPrices);
    return saleItemsWithSuggestedPrices;
  }));
  return masterArray.flat();
};

module.exports = masterFunction;
const somestuff = (masterFunction('hifidel'));

somestuff.then(console.log);
