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
  standardizedSaleItem.percent_diff = +(((item_only_price - suggested_price)  / suggested_price) * 100).toFixed(2);
  delete standardizedSaleItem.id;
  return standardizedSaleItem;
};

module.exports = {
  makeNumber,
  suggestedPricealyzer
};

