const capSentence = require('./index-START')

test('capSentence is a function', () => {
  expect(typeof capSentence).toEqual('function')
})

test('capitalizes the first letter of each word in a lowercase sentence', () => {
  expect(capSentence('i must confess, this is so much fun.')).toEqual(
    'I Must Confess, This Is So Much Fun.'
  )
})

test('capitalizes the first letter of each word in an uppercase sentence', () => {
  expect(capSentence('THIS ONE IS FOR SCOTCH.')).toEqual(
    'This One Is For Scotch.'
  )
})

test('capitalizes the first letter of each word in mixed cased sentences', () => {
  expect(capSentence('i woulD lOVe to spEAk at jsconF.')).toEqual(
    'I Would Love To Speak At Jsconf.'
  )
})