const { Router } = require('express');
const User = require('../models/User');

module.exports = Router()
//add a user
  .post('/', (req, res, next) => {
    User
      .create(req.body)
      .then(user => res.send(user))
      .catch(next);
  })

  // get all user
  .get('/', (req, res, next) => {
    User
      .find()
      .then(user => res.send(user))
      .catch(next);
  })

//get one user
  .get(':id', (req, res, next) => {
    User
      .findById(req.params.id)
      .then(user => res.send(user))
      .catch(next);
  })

//update a user
  .patch('/:id', (req, res, next) => {
    User
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(user => res.send(user))
      .catch(next);
  })

//delete a user
  .delete('/:id', (req, res, next) => {
    User
      .findByIdAndRemove(req.params.id)
      .then(user => res.send(user))
      .catch(next);
  });
