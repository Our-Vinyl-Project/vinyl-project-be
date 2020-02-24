const getWantlist = require('../services/getWantList');
const getSuggestedPrices = require('../services/getSuggestedPrices');
const { marketplaceSearch } = require('../utils/getSaleItems');
const suggestedPricealyzer = require('../utils/suggestedPricealyzer');

const masterFunction = async(userid) => {
  const wantlist = await getWantlist(userid);
  // console.log(wantlist);
  wantlist.forEach(async({ id }) => {
    // const [suggestedPrices, saleitems] = await Promise.all ([
    const suggestedPrices = await getSuggestedPrices(id);
    // console.log(suggestedPrices);
    const saleItems = await marketplaceSearch('release', id);
    // console.log(saleItems);
    // ]);
    const saleItemsWithSuggestedPrices = 
      saleItems.listing.map(saleItem => 
        suggestedPricealyzer(saleItem, suggestedPrices)
      );
    console.log(saleItemsWithSuggestedPrices);
  });
};
console.log(masterFunction('aaroncmullan'));
