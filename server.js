require('dotenv').config();
const express = require('express');
require('./lib/utils/connect')();

const app = require('./lib/app');

const PORT = process.env.PORT || 7883;

// app.use(express.json());
// app.use('/api/v1/', require('./oAuth/disconnect-test'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

module.exports = app;
