const { Router } = require('express');
const Release = require('../models/Release');

module.exports = Router()
//add a Release
  .post('/', (req, res, next) => {
    Release
      .create(req.body)
      .then(item => res.send(item))
      .catch(next);
  })

  // get all Releases
  .get('/', (req, res, next) => {
    Release
      .find()
      .then(item => res.send(item))
      .catch(next);
  })

//get one Release
  .get(':id', (req, res, next) => {
    Release
      .findById(req.params.id)
      .then(item => res.send(item))
      .catch(next);
  })

//update a Release
  .patch('/:id', (req, res, next) => {
    Release
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(item => res.send(item))
      .catch(next);
  })


//delete a Release
  .delete('/:id', (req, res, next) => {
    Release
      .findByIdAndRemove(req.params.id)
      .then(item => res.send(item))
      .catch(next);
  });
