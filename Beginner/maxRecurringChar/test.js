const maxRecurringChar = require('./index');

test('maxRecurringChar is a function', () => {
  expect(typeof maxRecurringChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxRecurringChar('a')).toEqual('a');
  expect(maxRecurringChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxRecurringChar('ab1c1d1e1f1g1')).toEqual('1');
});
