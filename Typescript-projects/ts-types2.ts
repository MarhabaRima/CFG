//define a function that takes two numbers and returns a number
function add(a: number, b: number): number {
    return a + b;
}

//call the function
console.log(add(3,4)); //7

//We can have functional parameters
function greet(name: string, age?: number): string { //? makes the parameter optional - there may or may not be an age}
return age ? `Hello ${name}. You are ${age} years old` : `Hello ${name}`;
/* Ternary statements: condition ? expression1 : expression2
if condition is true, expression1 is executed, otherwise expression2 is executed
*/ //Take up less space than if statements
//if age is provided, return the first string, otherwise return the second string
//General rule: optional parameters must come after required parameters
}
//Is equivalent to:
// function greet(name: string, age?: number): string {
//     if (age) {
//         return `Hello ${name}. You are ${age} years old`;
//     } else {
//         return `Hello ${name}`;
//     }
// }
console.log (greet('Sophie', 21))
console.log (greet('Beth'))

//Function with default parameters
function exponent(a: number, b: number = 2): number { //b has a default value of 2
    return a ** b; //** is the exponentiation operator
}

console.log(exponent(5,3)); //125 - 5 to the power of 3
console.log(exponent(5)); //25 - 5 to the power of 2
//If you don't provide a value for b, it will default to 2
