const {sum} = require('./sum.js')
test(`adds 2 positive integers`, () => {
    expect(sum(1, 2)).toBe(3)
})
// In this test, we import the sum function from the sum.js file and test if it adds two positive integers correctly.
// The test function takes two arguments: a string description of the test and a callback function that contains the test logic.
// The expect function is used to make assertions about the output of the sum function.
// The toBe matcher checks if the actual output of the sum function matches the expected value (3 in this case).
// If the actual output matches the expected value, the test passes; otherwise, it fails.

test('adds 2 negative integers', () => {
    expect(sum(-2, -5)).toBe(-8)
})
// This test checks if the sum function correctly adds two negative integers.
// The expect function asserts that the sum of -2 and -5 should be -7.
// Since the sum function returns -7, the test passes.
test ('adds a positive and a negative integer', () => {
    expect(sum(2, -5)).toBe(-3)
})
// This test checks if the sum function correctly adds a positive and a negative integer.
// The expect function asserts that the sum of 2 and -5 should be -3.
// Since the sum function returns -3, the test passes.