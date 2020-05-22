const { Router } = require('express');
const getSuggestedPrices = require('../services/getSuggestedPrices.js');

module.exports = Router()
  .get('/:id', (req, res, next) => {
    const id = req.params.id;
    
    getSuggestedPrices(id)
      .then(prices => res.send(prices))
      .catch(next);
  });
