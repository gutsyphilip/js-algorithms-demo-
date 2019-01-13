const hammingDistance = require('./index-START')

test('hammingDistance is a function', () => {
  expect(typeof hammingDistance).toEqual('function')
})

test('returns the hamming distance for letters', () => {
  expect(hammingDistance('river', 'rover')).toEqual(1)
})

test('returns the hamming distance for numbers', () => {
  expect(hammingDistance('1011101', '1001001')).toEqual(2)
})

test('returns the hamming distance for letters', () => {
  expect(hammingDistance('karolin', 'kerstin')).toEqual(3)
})

test('returns the hamming distance for letters', () => {
  expect(hammingDistance('drummer', 'dresser')).toEqual(3)
})


