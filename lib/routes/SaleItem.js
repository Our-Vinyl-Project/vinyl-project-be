const { Router } = require('express');
const SaleItem = require('../models/SaleItem');

module.exports = Router()
//add a sale Item
  .post('/', (req, res, next) => {
    SaleItem
      .create(req.body)
      .then(item => res.send(item))
      .catch(next);
  })

  // get all items
  .get('/', (req, res, next) => {
    SaleItem
      .find()
      .then(item => res.send(item))
      .catch(next);
  })

//get one item
  .get(':id', (req, res, next) => {
    SaleItem
      .findById(req.params.id)
      .then(item => res.send(item))
      .catch(next);
  })

//update a user
  .patch('/:id', (req, res, next) => {
    SaleItem
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(item => res.send(item))
      .catch(next);
  })

//delete a
  .delete('/:id', (req, res, next) => {
    SaleItem
      .findByIdAndRemove(req.params.id)
      .then(item => res.send(item))
      .catch(next);
  });
