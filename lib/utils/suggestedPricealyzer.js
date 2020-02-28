const conditionRatings = require('./conditionRatings');

// const makeNumber = string => {
//   const number = string.replace(',', '').match(/\d+\.\d+/);
//   if(number) return +number[0];
//   return NaN;
// };

const regexMatchPattern = /\d+[.,]?\d*[.,]?(\d+)?/;
const makeNumber = (price, shipping, convertedPrice) => {
  // console.log('price', price);
  // console.log('shipping', shipping);
  // console.log('convertedPrice', convertedPrice);
  // if any currency and shipping, then the converted price includes shipping
  // task is to remove shipping from price whether USD or other
  // USD prices without shipping don't have a converted price
  // non-USD converted prices without shipping do not need further calculaition
  // if there is a shipping price, then a calculation will need to be made
  let priceOnly = price.match(regexMatchPattern);
  let priceOnlyNumerals;
  if(priceOnly) {
    priceOnlyNumerals = Number(priceOnly[0].toString().replace(',', ''));
    priceOnly = +priceOnly[0];
    //console.log('priceOnly', priceOnly);
  }

  let convertedPriceOnly = convertedPrice.match(regexMatchPattern);
  if(convertedPriceOnly) {
    console.log('convertedPriceOnly', convertedPriceOnly);
    //convertedPriceOnly = +convertedPriceOnly[0].toString().replace(',', '').replace('.', '');
    convertedPriceOnly = Number(convertedPriceOnly[0].toString().replace(',', ''));
    console.log('convertedPriceOnly', convertedPriceOnly);
    //console.log('convertedPriceOnly', convertedPriceOnly);
  }
  // if there's no converted price then the price is in American and has no shipping
  else return priceOnly;

  let shippingOnly = shipping.match(regexMatchPattern);
  let shippingOnlyNumerals;
  if(shippingOnly) {
    shippingOnlyNumerals = Number(shippingOnly[0].toString().replace(',', ''));
    shippingOnly = +shippingOnly[0];
    //console.log('shippingOnly', shippingOnly);
  }
  else return convertedPriceOnly;

  const nonShippingPriceFraction = 1 - (shippingOnlyNumerals / (shippingOnlyNumerals + priceOnlyNumerals));
  const actualPrice = convertedPriceOnly * nonShippingPriceFraction;
  return actualPrice || priceOnly;
};

// 'price': '€99.99',
// 'shipping': '\n        + €16.00\n                \n                shipping',
// 'converted_price': 'about            $126.08 total',

// const makeItemOnlyPrice = ({ price, shipping, converted_price: convertedPrice, }) => { //saleItem
//   console.log(price, shipping, convertedPrice);
//   return makeNumber(price, shipping, convertedPrice) || makeNumber(price);
// };

const suggestedPricealyzer = (saleItem, suggestedPriceObject) => {
  const standardizedSaleItem = { ...saleItem };
  if(!standardizedSaleItem.price){
    delete standardizedSaleItem.id;
    return standardizedSaleItem;
  }
 
  standardizedSaleItem.conditionRating = conditionRatings[saleItem.condition_media];
  standardizedSaleItem.item_only_price = +makeNumber(saleItem).toFixed(2);
  standardizedSaleItem.suggested_price = +suggestedPriceObject[saleItem.condition_media].value.toFixed(2);
  standardizedSaleItem.sale_id = +saleItem.id.split('/')[3];
  standardizedSaleItem.sale_link = saleItem.id;
  standardizedSaleItem.release_id = +saleItem.release_link.split('/')[3];
  const { item_only_price, suggested_price } = standardizedSaleItem;
  standardizedSaleItem.amount_diff = +(item_only_price - suggested_price).toFixed(2);
  standardizedSaleItem.percent_diff = +(((item_only_price - suggested_price)  / suggested_price) * 100).toFixed(2);
  delete standardizedSaleItem.id;
  return standardizedSaleItem;
};

module.exports = {
  makeNumber,
  suggestedPricealyzer
};

