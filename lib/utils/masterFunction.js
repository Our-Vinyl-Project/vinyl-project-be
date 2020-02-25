const getWantlist = require('../services/getWantList');
const getSuggestedPrices = require('../services/getSuggestedPrices');
const { marketplaceSearch } = require('../utils/getSaleItems');
const { suggestedPricealyzer } = require('../utils/suggestedPricealyzer');

const masterFunction = async(userid) => {
  const wantlist = await getWantlist(userid);

  const masterArray = await Promise.all (wantlist.map(async({ id }) => {
    const [suggestedPrices, saleItems] = await Promise.all ([
      getSuggestedPrices(id),
      marketplaceSearch('release', id)
    ]);
    const saleItemsWithSuggestedPrices = 
      saleItems.listing.map(saleItem => 
        suggestedPricealyzer(saleItem, suggestedPrices)
      );
    return saleItemsWithSuggestedPrices;
  }));
  return masterArray.flat();
};

module.exports = masterFunction;
<<<<<<< HEAD
const somestuff = (masterFunction('hifidel'));

somestuff.then(console.log);
=======
>>>>>>> d1c484b105cd9ad91984ad4cba1aeec354c4f4d2
