const csv = require('csvtojson');
const Price = require('../models/Price');
const csvFilePath = 'lib/models/seed.csv';

function seedData() {
  return csv()
    .fromFile(csvFilePath)
    .then(jsonObj => Price.create(jsonObj));
}

module.exports = seedData;
