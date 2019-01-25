const whereIBelong = require('./index-START');

test('whereIBelong is a function', () => {
  expect(typeof whereIBelong).toEqual('function');
});

test('returns the appropriate index', () => {
  expect(whereIBelong([1,2,3,4], 1.5)).toEqual(1);
});


test('returns the index of the specified number', () => {
  expect(whereIBelong([10, 20, 30, 40, 50], 30)).toEqual(2);
});

test('returns the index even with an empty array', () => {
  expect(whereIBelong([], 1)).toEqual(0);
});

