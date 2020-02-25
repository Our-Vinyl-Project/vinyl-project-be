const { makeNumber } = require('../suggestedPricealyzer');

describe('makeNumber function', () => {
  it('extracts a numeric value from a string', () => {
    const inputString = '\n adkj   $439.80 \n';
    const result = makeNumber(inputString);
    expect(result).toEqual(439.80);
  });
  it('returns NaN if there is no number in the string', () => {
    const inputString = '\n adk\n';
    const result = makeNumber(inputString);
    expect(result).toBeNaN;
  });
});
