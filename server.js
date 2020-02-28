require('dotenv').config();
require('./lib/utils/connect')();
const cron = require('node-cron');
const { getPrices } = require('./lib/utils/getPrices');


const app = require('./lib/app');

const PORT = process.env.PORT || 7891;

cron.schedule('0 0 * * * ', () => {
  getPrices();
  console.log('cron running every day at midnight'); // eslint-disable-line 
});

app.listen('3128');

const server = app.listen(PORT, () => console.log(`Started on ${PORT}`)); // eslint-disable-line no-console
server.setTimeout(240000);
