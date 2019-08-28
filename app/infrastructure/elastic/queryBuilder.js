class QueryBuilder {
  constructor(indexPrefix) {
    this.indexPrefix = indexPrefix;
    this.page = 0;
    this.limit = 10;
    this.textSearch = '';
  }

  setIndex(language) {
    this.language = language;
    this.index = `${this.indexPrefix}-${language}`;
    return this;
  }

  setPaging(page, limit) {
    if (page) this.page = page;

    if (limit) this.limit = limit;

    return this;
  }

  setSearch(textSearch) {
    this.textSearch = textSearch;
    return this;
  }

  build() {
    return {
      from: this.page,
      size: this.limit,
      index: this.index,
      body: {
        query: {
          match: { name: this.textSearch },
        },
      },
    };
  }
}

module.exports = QueryBuilder;
