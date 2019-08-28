const searchRepository = require('./search.repository');

const mountIndexSearch = (language) => {
  const smartshopIndexPrefix = 'smartshop';

  return {
    index: `${smartshopIndexPrefix}-${language}`,
  };
};

const mountSearch = textSearch => ({
  query: {
    match: { name: textSearch },
  },
});

const mountPaging = (page, limit) => {
  let pageValue = 0;
  if (page) pageValue = page;

  let limitValue = 10;
  if (limit) limitValue = limit;

  return {
    from: pageValue,
    size: limitValue,
  };
};

const search = async (textSearch, language, page, limit) => {
  if (!textSearch) {
    return [];
  }

  const index = mountIndexSearch(language);
  const paging = mountPaging(page, limit);
  const searchObj = mountSearch(textSearch);

  return searchRepository.search({ ...paging, ...index, body: searchObj });
};


module.exports = { search };
