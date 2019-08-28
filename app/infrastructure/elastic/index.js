const { Client } = require('@elastic/elasticsearch');
const { elastic } = require('../config');

module.exports = new Client(elastic);
