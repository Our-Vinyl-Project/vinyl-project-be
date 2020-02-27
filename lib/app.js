const express = require('express');
const app = express();
// const { getPrices } = require('./utils/getPrices');
const { seed } = require('./utils/arrayGenerator');

app.use(express.json());

app.use(require('cors')({
  origin: true,
  credentials: true
}));

app.use('/api/v1/wants', require('./routes/wants.js'));
app.use('/api/v1/items', require('./routes/items.js'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));


// getPrices().then(console.log); //this will be called in the cron job eventually

seed().then(console.log);
module.exports = app;
