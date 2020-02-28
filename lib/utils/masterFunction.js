const getWantlist = require('../services/getWantList');
const getSuggestedPrices = require('../services/getSuggestedPrices');
const { marketplaceSearch } = require('../utils/getSaleItems');
const { suggestedPricealyzer } = require('../utils/suggestedPricealyzer');

const availabilityTabulator = flatArray =>
  flatArray.reduce((acc, saleItem) => {
    acc[saleItem.release_id] ?

      (acc[saleItem.release_id][saleItem.condition_media] ? 
        acc[saleItem.release_id][saleItem.condition_media] = acc[saleItem.release_id][saleItem.condition_media] + 1 :
        acc[saleItem.release_id][saleItem.condition_media] = 1) :

      acc[saleItem.release_id] = {
        [saleItem.condition_media]: 1
      };
    return acc;
  }, {});

const masterFunction = async(userid) => {
  const wantlist = await getWantlist(userid);

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
      return saleItemsWithSuggestedPrices;
    } catch(error) {
      console.log(error); // eslint-disable-line no-console
    }
  }));

  const flatArray = masterArray.flat();

  // const availabilityLookup = flatArray.reduce((acc, saleItem) => {
  //   acc[saleItem.release_id] ?
  //     acc[saleItem.release_id] = acc[saleItem.release_id] +  1 :
  //     acc[saleItem.release_id] = 1;
  //   return acc;
  // }, {});

  // const availabilityLookup = flatArray.reduce((acc, saleItem) => {
  //   acc[saleItem.release_id] ?
  //     acc[saleItem.release_id][saleItem.condition_media] =
  //       acc[saleItem.release_id][saleItem.condition_media] + 1 :
  //     acc[saleItem.release_id] = {
  //       [saleItem.condition_media]: 1
  //     };
  //   return acc;
  // }, {});

  const availabilityLookup = availabilityTabulator(flatArray);
  flatArray.forEach(saleItem =>
  // saleItem.num_available = availabilityLookup[saleItem.release_id]);
    saleItem.num_available = availabilityLookup[saleItem.release_id][saleItem.condition_media]);

  return flatArray;
};

module.exports = {
  availabilityTabulator,
  masterFunction
};
