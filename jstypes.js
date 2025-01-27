const greeting = 'Hello there and welcome world!'
console.log(greeting) // this triggers the greeting const to print the element in quotes.

// I want to be able to greet different people

//Concatenation
// concatenation is the process of joining two strings together
//want to know greet people by adding name to greeting

const greetingOpening = 'Hello there '
const greetingClosing = ' and welcome to the class!'
const message = greetingOpening + 'John' + greetingClosing
const message2 = greetingOpening + 'Alice' + greetingClosing

console.log(message)    // Hello there John Welcome to the class!
console.log(message2)    // Hello there John Welcome to the class!

//In String interpolation, you don't need to use the space between the variables and the strings
//String Interpolation
//Interpolation is the process of evaluating a string literal containing 
// one or more placeholders, yielding a result in which the placeholders 
// are replaced with their corresponding values.
const interpolatedString = `${greetingOpening}John${greetingClosing}`
console.log(interpolatedString) // Hello there John Welcome to the class!