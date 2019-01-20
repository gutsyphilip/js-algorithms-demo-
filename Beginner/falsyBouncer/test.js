const falsyBouncer = require('./index-START');

test('falsyBouncer is a function', () => {
    expect(typeof falsyBouncer).toEqual('function');
});

test('Removes all falsy values', () => {
    expect(falsyBouncer([1, 0, null, '', 5])).toEqual([1, 5]);
})

test('Removes all falsy values', () => {
    expect(falsyBouncer([NaN, 0, null, '', undefined])).toEqual([]);
})




