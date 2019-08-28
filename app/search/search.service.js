const searchRepository = require('./search.repository');
const { QueryBuilder } = require('../infrastructure/elastic');

const search = async (textSearch, language, page, limit) => {
  if (!textSearch) {
    return [];
  }

  const query = new QueryBuilder('smartshop')
    .setIndex(language)
    .setPaging(page, limit)
    .setSearch(textSearch)
    .build();

  return searchRepository.search(query);
};

module.exports = { search };
