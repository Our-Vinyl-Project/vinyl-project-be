require('dotenv').config();
require('./lib/utils/connect')();
const cron = require('node-cron');


const app = require('./lib/app');

const PORT = process.env.PORT || 7891;

cron.schedule('0 0 * * * ', function() {
  console.log('cron running every day at midnight');
});

// listen for cron
app.listen('3128', () => {
  console.log('cron listening on 3128');
});

const server = app.listen(PORT, () => console.log(`Started on ${PORT}`)); // eslint-disable-line no-console
server.setTimeout(240000);
