const elasticBuilder = require('elastic-builder');

class QueryBuilder {
  constructor(indexPrefix) {
    this.indexPrefix = indexPrefix;
    this.pageValue = 0;
    this.page = 1;
    this.limit = 10;
    this.textSearch = '';
    this.builder = elasticBuilder.requestBodySearch();
    this.matchQuery = elasticBuilder.matchAllQuery();
  }

  setIndex(language) {
    this.language = language;
    this.index = `${this.indexPrefix}-${language}`;
    return this;
  }

  setPaging(page, limit) {
    if (limit) this.limit = limit;

    this.page = page;

    if (page) {
      if (page > 1) {
        this.pageValue = page - 1;
        this.pageValue = this.pageValue * this.limit;
      }
    }

    return this;
  }

  setSearch(textSearch) {
    this.textSearch = textSearch;

    if (this.textSearch) this.matchQuery = elasticBuilder.matchQuery('name', this.textSearch);

    return this;
  }

  getPage() {
    return this.page;
  }

  build() {
    const builder = elasticBuilder.requestBodySearch();
    const boolQuery = elasticBuilder.boolQuery().must(this.matchQuery);
    const bodyQuery = builder.query(boolQuery);

    return {
      index: this.index,
      from: this.pageValue,
      size: this.limit,
      body: bodyQuery.toJSON(),
    };
  }
}

module.exports = QueryBuilder;
