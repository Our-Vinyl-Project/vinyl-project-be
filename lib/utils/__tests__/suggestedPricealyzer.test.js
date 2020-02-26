const { suggestedPricealyzer } = require('../suggestedPricealyzer');

describe('suggestedPricealyzer function', () => {
  it('adds price information to saleItem object', () => {{
    const result = suggestedPricealyzer(
      {
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
      },
      {
        id: 4282482,
        'Very Good (VG)': { currency: 'USD', value: 218.6700767263427 },
        'Good Plus (G+)': { currency: 'USD', value: 121.48337595907928 },
        'Near Mint (NM or M-)': { currency: 'USD', value: 413.04347826086956 },
        'Good (G)': { currency: 'USD', value: 72.89002557544757 },
        'Very Good Plus (VG+)': { currency: 'USD', value: 315.85677749360616 },
        'Mint (M)': { currency: 'USD', value: 461.63682864450124 },
        'Fair (F)': { currency: 'USD', value: 48.593350383631716 },
        'Poor (P)': { currency: 'USD', value: 24.296675191815858 }
      });
    expect(result).toEqual({
      title: 'The Stooges - The Stooges (LP, Album, CP )',
      condition_sleeve: 'Very Good (VG)',
      condition_media: 'Very Good Plus (VG+)',
      seller: 'compwiz4u',
      ships_from: 'United States',
      price: '$299.00',
      release_id: 4282482,
      shipping: '\n        + $5.00\n                \n                shipping',
      converted_price: '            $304.00 total',
      release_link: '/The-Stooges-The-Stooges/release/4282482',
      sale_id: 782289920,
      sale_link: '/sell/item/782289920',
      conditionRating: 6,
      item_only_price: 304.00,
      suggested_price: 315.86,
      amount_diff: -11.86,
      percent_diff: -0.04
    });
  }});
});
