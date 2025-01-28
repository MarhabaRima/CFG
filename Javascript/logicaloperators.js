//logical operators in javascript are used to determine the 
// logic between variables or values.
// Given below are the logical operators in javascript.
// 1. && (Logical AND)
// 2. || (Logical OR)
// 3. ! (Logical NOT)
// Logical AND (&&)
// The logical AND operator (&&) is used to check if two or more
// conditions are true. If all the conditions are true, then the
// result is true. If any of the conditions is false, then the
// result is false.

//Example

//OR 
// requires only one condition to be true
const response2 = 'books'
if (response2 === 'books' || response2 === 'Books') {
    console.log('I love reading books')
} else {
    console.log('I love watching movies')
} 
//Output: I love reading books

//Another example
const response3 = 'radio'
if (response3 === 'books' || response3 === 'Books') {
    console.log('I love reading books')
} else if (response3 === 'radio') {
    console.log('I love listening to the radio') 
} else {
    console.log('I love watching movies')
}
//Output: I love watching movies

//AND 
// requires all conditions to be true

//Example
const age = 18
const country = 'Kenya'
if (age >= 18 && country === 'Kenya') {
    console.log('You are an adult in Kenya')
} else {
    console.log('You are a minor or not in Kenya')
}
//Output: You are an adult in Kenya

// NOT (!) 
// operator is used to reverse the logical state of its operand.
// If a condition is true, the NOT operator will make it false.
// If a condition is false, the NOT operator will make it true.
//Example
const response = 'books'
if (!(response === 'books')) {
    console.log('I love watching movies')
} else {
    console.log('I love reading books')
}
//Output: I love reading books

//Another example
console.log (3 !== 2) //Output: true
console.log(!false) //Output: true