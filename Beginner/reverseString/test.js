const reverseString = require('./index-START')

test('reverseString is a function', () => {
  expect(typeof reverseString).toEqual('function');
});

test('reverses a string of text', () => {
  expect(reverseString('aeiou')).toEqual('uoiea');
});

test('reverses a string containing numbers', () => {
  expect(reverseString('123456789')).toEqual('987654321');
});

test('reverses a string containing mixed case characters', () => {
  expect(reverseString('AsDfGhJkL')).toEqual('LkJhGfDsA');
});



