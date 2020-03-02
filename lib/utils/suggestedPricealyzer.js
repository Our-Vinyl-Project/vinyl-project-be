const conditionRatings = require('./conditionRatings');

const regexMatchPattern = /\d+[.,]?\d*[.,]?(\d+)?/;
const makeNumber = ({ price, shipping, converted_price: convertedPrice }) => {
  let priceOnly = price.match(regexMatchPattern);
  let priceOnlyNumerals;
  if(priceOnly) {
    priceOnlyNumerals = Number(priceOnly[0].toString().replace(',', ''));
    priceOnly = +priceOnly[0];
  }

  let convertedPriceOnly = convertedPrice.match(regexMatchPattern);
  if(convertedPriceOnly) {
    convertedPriceOnly = Number(convertedPriceOnly[0].toString().replace(',', ''));
  }
  else return priceOnly;

  let shippingOnly = shipping.match(regexMatchPattern);
  let shippingOnlyNumerals;
  if(shippingOnly) {
    shippingOnlyNumerals = Number(shippingOnly[0].toString().replace(',', ''));
    shippingOnly = +shippingOnly[0];
  }
  else return convertedPriceOnly;

  const nonShippingPriceFraction = 1 - (shippingOnlyNumerals / (shippingOnlyNumerals + priceOnlyNumerals));
  const actualPrice = convertedPriceOnly * nonShippingPriceFraction;
  return actualPrice;
};

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

