//use arrayGenerator instead
// 
// 
// 
// ***********************************/

const Price = require('../models/Price');


const timestamp = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date;
};

const price = () => {
  let num = 28;
  num = num - Math.random() * 9;
  return num;
};

const array = [
  {
    releaseId: 1,
    timestamp: timestamp(),
    'Mint (M)': {
      currency: 'USD',
      value: price()
    }
  },
  {
    releaseId: 1,
    timestamp: timestamp(),
    'Mint (M)': {
      currency: 'USD',
      value: price()
    }
  },
  {
    releaseId: 1,
    timestamp: timestamp(),
    'Mint (M)': {
      currency: 'USD',
      value: price()
    }
  },
  {
    releaseId: 1,
    timestamp: timestamp(),
    'Mint (M)': {
      currency: 'USD',
      value: price()
    }
  },
  {
    releaseId: 1,
    timestamp: timestamp(),
    'Mint (M)': {
      currency: 'USD',
      value: price()
    }
  }];
const arrayDone = array.slice();
// console.log(arrayDone);


  // Price.insertMany([...arrayDone]);
  // return arrayDone;


// arrayDone.map(item => {
//   Price.create(item);
// });

const seed = async() => {
  await Price.insertMany([...arrayDone]);
  return arrayDone;
};

seed();
module.exports = { seed };

