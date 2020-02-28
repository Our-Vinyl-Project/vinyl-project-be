require('dotenv').config();
require('./lib/utils/connect')();

const { seed } = require('./lib/utils/arrayGenerator');


seed().then(console.log); //change parameters in in arrayGenerator to seed wants db
