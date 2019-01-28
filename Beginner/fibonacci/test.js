const fibonacci = require('./index-START')

test('fibonacci is a function', () => {
  expect(typeof fibonacci).toEqual('function')
})

test('returns the 6th fibonacci number', () => {
    expect(fibonacci(6)).toEqual(13)
  })

test('returns the 20th fibonacci number', () => {
  expect(fibonacci(20)).toEqual(10946)
})
