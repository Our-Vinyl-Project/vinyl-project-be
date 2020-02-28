const { makeNumber } = require('../suggestedPricealyzer');

describe('makeNumber function', () => {
  it('extracts a numeric value from a string', () => {
    const price = '€99.99';
    const shipping = '\n        + €16.00\n                \n                shipping';
    const converted_price = 'about            $126.08 total';
    const inputObject = {
      price,
      shipping,
      converted_price
    };
    const result = makeNumber(inputObject);
    expect(result).toEqual(108.6881558755065);
  });
});
