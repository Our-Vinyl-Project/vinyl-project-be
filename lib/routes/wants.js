const { Router } = require('express');
const getWantList = require('../services/getWantList');

//gets user wants from Discogs
module.exports = Router()
  .get('/:username', (req, res, next) => {
    const username = req.params.username;

    getWantList(username)
      .then(wants => res.send(wants))
      .catch(next);
  });
