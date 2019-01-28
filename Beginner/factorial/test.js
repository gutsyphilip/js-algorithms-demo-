const factorial = require('./index-START')

test('factorial is a function', () => {
  expect(typeof factorial).toEqual('function')
})

test('returns the factorial of 20', () => {
  expect(factorial(10)).toEqual(3628800)
})

test('returns the factorial of 20', () => {
  expect(factorial(20)).toEqual(2432902008176640000)
})
