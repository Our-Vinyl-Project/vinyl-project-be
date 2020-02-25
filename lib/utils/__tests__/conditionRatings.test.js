const conditionRatings = require('../conditionRatings.js');

describe('conditionRatings dictionary', () => {
  it('provides a numerical value to match a string rating', () => {{
    const saleItem = {
      title: 'The Stooges - The Stooges (LP, Album, CP )',
      condition_sleeve: 'Very Good (VG)',
      condition_media: 'Very Good Plus (VG+)',
      seller: 'compwiz4u',
      ships_from: 'United States',
      price: '$299.00',
      shipping: '\n        + $5.00\n                \n                shipping',
      converted_price: '            $304.00 total',
      release_link: '/The-Stooges-The-Stooges/release/4282482',
      id: '/sell/item/782289920'
    };
    expect(conditionRatings[saleItem.condition_media]).toEqual(6);
  }});
});
