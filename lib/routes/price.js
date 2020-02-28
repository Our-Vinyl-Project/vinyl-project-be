
const { Router } = require('express');
const Price = require('../models/Price');



module.exports = Router()
  .get('/:id', (req, res, next) => {
    const id = req.params.id;
    Price
      .find({ releaseId: id })
      .then(prices => {
        return prices.reduce((acc, cv) => {
          acc.push([cv.timestamp, cv['Mint (M)'].value]);
          return acc;
        }, []);
      })
      .then(prices => res.send(prices))
      .catch(next);
  });



// const newData = data.reduce((acc, cv) => {
//   acc.push([ cv.timestamp, cv['Mint (M)'].value])
//   return acc
//    },[])
