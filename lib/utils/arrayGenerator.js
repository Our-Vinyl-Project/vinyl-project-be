const Price = require('../models/Price');

const timestamp = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date;
};

const price = (val) => {
  const dailyChange = Math.random() * .09 - .02;
  const newPrice = val * (1 - dailyChange);
  return newPrice;
};

const arrayGenerator = (numDays, releaseId, initialValue) => {
  let array = [];
  for(let i = 0; i < numDays; i++){
    const lastPrice = i === 0 ?
      initialValue :
      price(array[array.length - i]['Mint (M)'].value);
    array.push(
      {
        releaseId,
        timestamp: timestamp(i + 1),
        'Mint (M)': {
          currency: 'USD',
          value: lastPrice
        }
      });
  }
  return array;
};

const seed = async() => {
  const generatedArray = arrayGenerator(30, 374527, 260);

  await Price.insertMany(generatedArray);
};

module.exports = { seed };

