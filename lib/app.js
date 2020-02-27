const express = require('express');
const app = express();
const { getPrices } = require('./utils/getPrices');

app.use(express.json());

app.use(require('cors')({
  origin: true,
  credentials: true
}));

app.use('/api/v1/items', require('./routes/items.js'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));


getPrices().then(console.log);
module.exports = app;
