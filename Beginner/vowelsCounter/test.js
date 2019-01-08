const vowelsCounter = require('./index-START');

test('vowelsCounter is a function', () => {
  expect(typeof vowelsCounter).toEqual('function');
});

test('returns the number of vowels found', () => {
  expect(vowelsCounter('aeiou')).toEqual(5);
});

test('returns the number of vowels found when string is capitalized', () => {
  expect(vowelsCounter('AEIOU')).toEqual(5);
});

test('returns the number of vowels found when all alphabets are passed in', () => {
  expect(vowelsCounter('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels found when string has mixed capitalization', () => {
  expect(vowelsCounter('Abcdegfizzjbhso')).toEqual(4);
});
