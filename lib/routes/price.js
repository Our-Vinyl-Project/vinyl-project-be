
const { Router } = require('express');
const Price = require('../models/Price');



module.exports = Router()
  .post('/', (req, res, next) => {
    Price
      .create(req.body)
      .then(book => res.send(book))
      .catch(next);
  })