const { mountSearchRespponse } = require('./search.response');

test('When offset is zero the currentPage should be one', () => {
  const response = mountSearchRespponse(null, 'products', '', 0, 5, 9);

  expect(response.currentPage).toBe('products?limit=5&page=1');
  expect(response.nextPage).toBe('products?limit=5&page=2');
  expect(response).toEqual(expect.not.objectContaining({ previousPage: 'products?limit=5&page=0' }));
});

test('When offset is ten and limit is 5 the currentPage should be 2', () => {
  const response = mountSearchRespponse(null, 'products', '', 10, 5, 9);

  expect(response.currentPage).toBe('products?limit=5&page=2');
  expect(response.previousPage).toBe('products?limit=5&page=1');
});

test('When total is 9, page is 2 and limit is 5, the nextPage should not be exist', () => {
  const response = mountSearchRespponse(null, 'products', '', 10, 5, 9);

  expect(response).toEqual(expect.not.objectContaining({ nextPage: 'products?limit=5&page=3' }));
});

test('When receive a text to search should return restful param with search text', () => {
  const data = [{
    _id: 1,
    _source: [{
      name: 'test',
      description: '',
      images: [],
      price: 2.00,
      categories: [],
      tags: []
    }]
  }];
  const response = mountSearchRespponse(data, 'products', 'test', 0, 5, 9);

  expect(response.currentPage).toBe('products?q=test&limit=5&page=1');
  expect(response.nextPage).toBe('products?q=test&limit=5&page=2');
  expect(response).toEqual(expect.not.objectContaining({ previousPage: 'products?q=test&limit=5&page=0' }));
});
