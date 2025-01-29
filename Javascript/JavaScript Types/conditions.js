//If else are conditional statements that are used to 
// perform different actions based on different conditions.
//It only allows you to perform one action based on the 
// condition, one at a time. 
//If else statements are used to perform different actions
// based on different conditions.
//If a condition is true, you can perform one action and if
// the condition is false, you can perform another action.

//Example
const response = 'books'

if (response === 'books') {
    console.log('I love reading books')
} else {
    console.log('I love watching movies')
}
//Output: I love reading books

//Example
const response2 = 'movies'
if (response2 === 'books') {
    console.log('I love reading books')
} else {
    console.log('I love watching movies')
} 
//Output: I love watching movies

//A different example

const age = 18
if (age >= 18) {
    console.log('You are an adult')
} else {    
    console.log('You are a minor')
}
//Output: You are an adult

//Another example
const country = 'Kenya'
if (country === 'Kenya') {
    console.log('You are in Kenya')
} else {
    console.log('You are not in Kenya')
}
//Output: You are in Kenya
