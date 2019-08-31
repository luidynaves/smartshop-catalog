const QueryBuilder = require('./queryBuilder');

test('When setPaging is none should return from equal zero, size equal ten and page equal one', () => {
  const queryBuilder = new QueryBuilder('myIndex');
  const query = queryBuilder.build();

  expect(query.from).toBe(0);
  expect(query.size).toBe(10);
  expect(queryBuilder.getPage()).toBe(1);
});

test('When setPaging page is zero and limit is five should return from equal zero and size equal five', () => {
  const query = new QueryBuilder('myIndex')
    .setPaging(0, 5)
    .build();

  expect(query.from).toBe(0);
  expect(query.size).toBe(5);
});

test('When setPaging page is one and limit is five should return from equal zero, size equal five and page equal one', () => {
  const queryBuilder = new QueryBuilder('myIndex');
  const query = queryBuilder
    .setPaging(1, 5)
    .build();

  expect(query.from).toBe(0);
  expect(query.size).toBe(5);
  expect(queryBuilder.getPage()).toBe(1);
});

test('When setPaging page is two and limit is five should return from equal five, size equal five and page equal two', () => {
  const queryBuilder = new QueryBuilder('myIndex');
  const query = queryBuilder
    .setPaging(2, 5)
    .build();

  expect(query.from).toBe(5);
  expect(query.size).toBe(5);
  expect(queryBuilder.getPage()).toBe(2);
});

test('When setPaging page is two and limit is five should return from equal ten, size equal five and page equal three', () => {
  const queryBuilder = new QueryBuilder('myIndex');
  const query = queryBuilder
    .setPaging(3, 5)
    .build();

  expect(query.from).toBe(10);
  expect(query.size).toBe(5);
  expect(queryBuilder.getPage()).toBe(3);
});

test('When setIndex to en should return myIndex-en', () => {
  const queryBuilder = new QueryBuilder('myIndex');
  const query = queryBuilder
    .setIndex('en')
    .setPaging(3, 5)
    .build();

  expect(query.index).toBe('myIndex-en');
  expect(query.from).toBe(10);
  expect(query.size).toBe(5);
  expect(queryBuilder.getPage()).toBe(3);
});
