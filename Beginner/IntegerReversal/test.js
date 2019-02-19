const reverseInteger = require('./index-START');

test('reverseInteger function exists', () => {
  expect(reverseInteger).toBeDefined();
});

test('reverseInteger handles 0 as an input', () => {
  expect(reverseInteger(0)).toEqual(0);
});

test('reverseInteger flips a positive number', () => {
  expect(reverseInteger(5)).toEqual(5);
  expect(reverseInteger(15)).toEqual(51);
  expect(reverseInteger(90)).toEqual(9);
  expect(reverseInteger(2359)).toEqual(9532);
});

test('reverseInteger flips a negative number', () => {
  expect(reverseInteger(-5)).toEqual(-5);
  expect(reverseInteger(-15)).toEqual(-51);
  expect(reverseInteger(-90)).toEqual(-9);
  expect(reverseInteger(-2359)).toEqual(-9532);
});
