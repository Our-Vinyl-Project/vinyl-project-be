const conditionRatings = require('./conditionRatings');

const makeNumber = string => {
  const number = string.replace(',', '').match(/\d+\.\d+/);
  if(number) return +number[0];
  return NaN;
};

const makeItemOnlyPrice = saleItem => makeNumber(saleItem.converted_price) || makeNumber(saleItem.price);

const suggestedPricealyzer = (saleItem, suggestedPriceObject) => {
  const standardizedSaleItem = { ...saleItem };
  if(!standardizedSaleItem.price){
    delete standardizedSaleItem.id;
    return standardizedSaleItem;
  }
 
  standardizedSaleItem.conditionRating = conditionRatings[saleItem.condition_media];
  standardizedSaleItem.item_only_price = +makeItemOnlyPrice(saleItem).toFixed(2);
  standardizedSaleItem.suggested_price = +suggestedPriceObject[saleItem.condition_media].value.toFixed(2);
  standardizedSaleItem.sale_id = +saleItem.id.split('/')[3];
  standardizedSaleItem.sale_link = saleItem.id;
  standardizedSaleItem.release_id = +saleItem.release_link.split('/')[3];
  const { item_only_price, suggested_price } = standardizedSaleItem;
  standardizedSaleItem.amount_diff = +(item_only_price - suggested_price).toFixed(2);
  standardizedSaleItem.percent_diff = +((item_only_price - suggested_price) / suggested_price).toFixed(2);
  delete standardizedSaleItem.id;
  return standardizedSaleItem;
};

module.exports = {
  makeNumber,
  suggestedPricealyzer
};

// console.log(suggestedPricealyzer(
//   {
//     title: 'The Stooges - The Stooges (LP, Album, CP )',
//     condition_sleeve: 'Very Good (VG)',
//     condition_media: 'Very Good Plus (VG+)',
//     seller: 'compwiz4u',
//     ships_from: 'United States',
//     price: '$299.00',
//     shipping: '\n        + $5.00\n                \n                shipping',
//     converted_price: '            $304.00 total',
//     release_link: '/The-Stooges-The-Stooges/release/4282482',
//     id: '/sell/item/782289920'
//   },
//   {
//     id: 4282482,
//     'Very Good (VG)': { currency: 'USD', value: 218.6700767263427 },
//     'Good Plus (G+)': { currency: 'USD', value: 121.48337595907928 },
//     'Near Mint (NM or M-)': { currency: 'USD', value: 413.04347826086956 },
//     'Good (G)': { currency: 'USD', value: 72.89002557544757 },
//     'Very Good Plus (VG+)': { currency: 'USD', value: 315.85677749360616 },
//     'Mint (M)': { currency: 'USD', value: 461.63682864450124 },
//     'Fair (F)': { currency: 'USD', value: 48.593350383631716 },
//     'Poor (P)': { currency: 'USD', value: 24.296675191815858 }
//   }
// ));
