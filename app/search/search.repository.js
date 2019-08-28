const elasticConnection = require('../infrastructure/elastic');

const search = async (textSearch) => {
  const body = await elasticConnection.search(textSearch);

  return body;
};

module.exports = { search };
