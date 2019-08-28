const express = require('express');
const expressLocaleMiddleware = require('express-locale');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const startPolyglot = require('./utils/startPolyglot');
const { registerMiddlewareLogConfiguration } = require('./infrastructure/logger');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressLocaleMiddleware({
  priority: ['accept-language', 'default'],
  default: 'en_US',
}));

app.use(startPolyglot);

app.use(registerMiddlewareLogConfiguration);
app.use(helmet());

require('./routes')(app);

module.exports = app;
