const express = require('express');
const searchController = require('./search.controller');

const searchApp = express();

module.exports = searchApp.get('/search', searchController);
