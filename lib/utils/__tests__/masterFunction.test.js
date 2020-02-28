// const masterFunction = require('../masterFunction');

// const masterFunction = async(userid) => {
//   const wantlist = await getWantlist(userid);

//   const masterArray = await Promise.all (wantlist.map(async({ id }) => {
//     const [suggestedPrices, saleItems] = await Promise.all ([
//       getSuggestedPrices(id),
//       marketplaceSearch('release', id)
//     ]); 
//     const saleItemsWithSuggestedPrices = 
//       saleItems.listing.map(saleItem =>
//         suggestedPricealyzer(saleItem, suggestedPrices)
//       );
//     return saleItemsWithSuggestedPrices;
//   }));
//   return masterArray.flat();
// };

const { availabilityTabulator } = require('../masterFunction');

describe('availabilityLookup', () => {
  const saleItemsArray = [
    {
      release_id: 1,
      condition_media: 'Mint'
    },
    {
      release_id: 1,
      condition_media: 'Mint'
    },
    {
      release_id: 1,
      condition_media: 'Near Mint'
    },
    {
      release_id: 2,
      condition_media: 'Fair'
    }
  ];
  it('creates a nested object and increments values', () => {
    const result = availabilityTabulator(saleItemsArray);
    expect(result).toEqual({ 
      1: {
        Mint: 2,
        'Near Mint': 1
      },
      2: {
        Fair: 1
      }
    });
  });
});
