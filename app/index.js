const express = require('express');
const expressLocaleMiddleware = require('express-locale');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const startPolyglot = require('./utils/startPolyglot');
const winston = require('./infrastructure/winston');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressLocaleMiddleware({
  priority: ['accept-language', 'default'],
  default: 'en_US',
}));

app.use(startPolyglot);

app.use(morgan('combined', { stream: winston.stream }));
app.use(helmet());

require('./routes')(app);

module.exports = app;
