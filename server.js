require('dotenv').config();
require('./lib/utils/connect')();

const app = require('./lib/app');

const PORT = process.env.PORT || 7890;

const server = app.listen(PORT, () => console.log(`Started on ${PORT}`)); // eslint-disable-line no-console
server.setTimeout(240000);
