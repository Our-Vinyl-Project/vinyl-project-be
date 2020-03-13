const express = require('express');
const app = express();
// const { getPrices } = require('./utils/getPrices');
// const { seed } = require('./utils/arrayGenerator');

app.use(express.json());

app.use(require('cors')({
  origin: true,
  credentials: true
}));

app.use('/api/v1/wants', require('./routes/wants.js'));
app.use('/api/v1/items', require('./routes/items.js'));
app.use('/api/v1/chart', require('./routes/price.js'));

app.use('/', (req, res, next) => res.send('slash route'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
