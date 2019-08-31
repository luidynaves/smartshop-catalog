/* eslint-disable no-underscore-dangle */
const searchRepository = require('./search.repository');
const { QueryBuilder } = require('../infrastructure/elastic');
const { mountSearchRespponse } = require('./search.response');

const search = async (params, language) => {
  const queryBuilder = new QueryBuilder('smartshop');
  const query = queryBuilder
    .setIndex(language)
    .setPaging(params.page, params.limit)
    .setSearch(params.q)
    .build();

  const queryResult = await searchRepository.search(query);

  return mountSearchRespponse(queryResult.body.hits.hits, '/products', params.q, query.from, query.size, queryResult.body.hits.total.value);
};

module.exports = { search };
