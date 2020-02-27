const { Router } = require('express');
const masterFunction = require('../utils/masterFunction');

module.exports = Router()
  .get('/:username', (req, res, next) => {
    const username = req.params.username;

    masterFunction(username)
      .then(saleItems => res.send(saleItems))
      .catch(next);
  });
