const { marketplaceSearch } = require('../getSaleItems');

// const marketplaceSearch = (type, wantId) =>
//   new Promise((resolve, reject) => 
//     marketplace.search({ id: wantId, type },
//       result => {
//         if(result instanceof Error) return reject(result);
//         return resolve(result);
//       }));

describe('marketPlaceSearch function', () => {
  it('retrieves an array of sale items for a given release', async() => {
    const search = await marketplaceSearch('release', 4282482);
    expect(search).toEqual(`{"id": 4282482, "listing": [{"condition_media": "Very Good Plus (VG+)", "condition_sleeve": "Very Good (VG)", "converted_price": "            $304.00 total", "id": "/sell/item/782289920", "price": "$299.00", "release_link": "/The-Stooges-The-Stooges/release/4282482", "seller": "compwiz4u", "shipping": "
    + $5.00·················
            shipping", "ships_from": "United States", "title": "The Stooges - The Stooges (LP, Album, CP )"}, {"condition_media": "Very Good Plus (VG+)", "condition_sleeve": "Very Good Plus (VG+)", "converted_price": "about $369.57", "id": "/sell/item/1041594205", "price": "€340.00", "release_link": "/The-Stooges-The-Stooges/release/4282482", "seller": "mm74", "shipping": "
    + shipping", "ships_from": "Italy", "title": "The Stooges - The Stooges (LP, Album, CP )"}, {"condition_media": "Near Mint (NM or M-)", "condition_sleeve": "Near Mint (NM or M-)", "converted_price": "about $532.61", "id": "/sell/item/1052174199", "price": "€490.00", "release_link": "/The-Stooges-The-Stooges/release/4282482", "seller": "johem", "shipping": "
    + shipping", "ships_from": "Germany", "title": "The Stooges - The Stooges (LP, Album, CP )"}], "pagination": {"hasNext": false, "items": 3, "totalPages": 1}, "thumbnail": "https://img.discogs.com/kmwujHzuyUhKgMFowrB6lQ_EHkY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4282482-1375913082-1796.jpeg.jpg", "type": "release"}`);
  });
});
