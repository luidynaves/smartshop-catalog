const express = require('express');
const expressLocaleMiddleware = require('express-locale');
const bodyParser = require('body-parser');
const startPolyglot = require('./utils/startPolyglot');

const app = express();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressLocaleMiddleware({
  priority: ['accept-language', 'default'],
  default: 'en_US',
}));

app.use(startPolyglot);

require('./routes')(app);

app.listen(port, () => {

});
