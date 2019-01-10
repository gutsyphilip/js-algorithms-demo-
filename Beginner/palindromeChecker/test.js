const palindromeChecker = require('./index-START');

test('palindromeChecker is a function', () => {
  expect(typeof palindromeChecker).toEqual('function');
});

test('"php" is a palindrome', () => {
  expect(palindromeChecker('php')).toBeTruthy();
});

test('" php  " is not a palindrome', () => {
  expect(palindromeChecker(' php  ')).toBeFalsy();
});

test('"developer" is not a palindrome', () => {
  expect(palindromeChecker('developer')).toBeFalsy();
});

test('"2002" a palindrome', () => {
  expect(palindromeChecker('2002')).toBeTruthy();
});

