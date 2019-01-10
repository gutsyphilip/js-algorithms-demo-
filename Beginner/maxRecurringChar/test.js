const maxRecurringChar = require('./index-START');

test('maxRecurringChar is a function', () => {
  expect(typeof maxRecurringChar).toEqual('function');
});

test('Finds the most frequently used character', () => {
  expect(maxRecurringChar('sisusbsnshsjsmskslstsw')).toEqual('s');
});

test('Finds the most frequently used character even with mixed capitalization', () => {
  expect(maxRecurringChar('AbAdAabnmkAAAynjfaA')).toEqual('A');
});

test('Finds the most used number as well', () => {
  expect(maxRecurringChar('b2n3n2m2l2k2i2o2')).toEqual('2');
});
