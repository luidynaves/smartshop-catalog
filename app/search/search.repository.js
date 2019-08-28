const { client } = require('../infrastructure/elastic');

const search = async (textSearch) => {
  const body = await client.search(textSearch);

  return body;
};

module.exports = { search };
