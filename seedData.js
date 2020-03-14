require('dotenv').config();
require('./lib/utils/connect')();

const { seed } = require('./lib/utils/arrayGenerator');


seed().then(console.log).catch(console.error); // eslint-disable-line no-console
