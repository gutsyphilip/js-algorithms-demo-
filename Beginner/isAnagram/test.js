const isAnagram = require('./index-START')

test('isAnagram is a function', () => {
  expect(typeof isAnagram).toEqual('function')
})

test('"dog" is an anagram of "god"', () => {
  expect(isAnagram('dog', 'god')).toBeTruthy()
})

test('"Scotchy is Scotch!" is an anagram of "Scotch is Scotchy!"', () => {
  expect(isAnagram('Scotchy is Scotch!', 'Scotch is Scotchy!')).toBeTruthy()
})

test('"I do not work weekends." is not an anagram of "I do not work weekdays!"', () => {
  expect(isAnagram('I do not work weekends.', 'I do not work weekdays!')).toBeFalsy()
})