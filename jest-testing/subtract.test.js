const {subtract} = require('./subtract');
test('subtracts 2 positive integers', () => {
    expect(subtract(5, 2)).toBe(3);
});
test('subtracts 2 negative integers', () => {
    expect(subtract(-5, -2)).toBe(-3);
});
test('subtracts a positive and a negative integer', () => {
    expect(subtract(5, -2)).toBe(7);
});
// In this test file, we import the subtract function from the subtract.js file and test if it subtracts two integers correctly.
// The test functions take a string description of the test and a callback function that contains the test logic.
// The expect function is used to make assertions about the output of the subtract function.
// The toBe matcher checks if the actual output of the subtract function matches the expected value.
// If the actual output matches the expected value, the test passes; otherwise, it fails
// The tests check if the subtract function correctly subtracts two positive integers, two negative integers, and a positive and a negative integer.