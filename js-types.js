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
//if you are keeping a space in the concatenation element then you can remove the space before the variable in interpolation
//String Interpolation
//Interpolation is the process of evaluating a string literal containing 
// one or more placeholders, yielding a result in which the placeholders 
// are replaced with their corresponding values.
const interpolatedString = `${greetingOpening}John${greetingClosing}`
console.log(interpolatedString) // Hello there John Welcome to the class!

//Currency Converter
//1st step is to Set the original value and the exchange rate
const originalValue = 10
const exchangeRate = 1.14

//Calculate the new value
const exchangedValue = originalValue * exchangeRate

// Log it to the console
console.log (exchangedValue) // 11.4

//Number operators

//Addition
const Addition = 3 + 4
console.log(Addition) // 7

//Substraction
const Substraction = 45 - 34
console.log(Substraction) // 11

//Multiplication
const Multiplication = 5 * 3
console.log(Multiplication) // 15  

//Division
const Division = 14 / 2
console.log(Division) // 7

//Exponent - to the power of
const Exponent = 5 ** 3 // 5 * 5 * 5
console.log(Exponent) // 125

//Modulo - remainder of a division
const modulo = 8 % 3 // 8 / 3 = 2 remainder 2
console.log(modulo) // 2




