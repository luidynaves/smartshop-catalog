const express = require('express');
const expressLocaleMiddleware = require('express-locale');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const startPolyglot = require('./utils/startPolyglot');
const winston = require('./config/winston');

const app = express();

const port = process.env.PORT;

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

app.listen(port, () => {

});
