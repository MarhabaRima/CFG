//Variables - let, const, var (It allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.)
//If you follow the best practices, you should use let and const to declare variables. The var keyword is outdated and should be avoided.
const age = 32
age = 35 // Error: Assignment to constant variable.
console.log(age) // 32

//whereas to fix this error, you can use the let keyword
let age2 = 32
age = 35
console.log(age) // 35

//The var keyword is function-scoped, meaning that it is limited to the function in which it is declared.

// If we wanted to check sale price and used const - you are
//having to create a variable and now you want to change the value of the variable
const price = 100
const discount = 20
const newPrice = price * ((100 - 20) / 100)
console.log('Sale Price: £${newPrice}') // 80

//this would work fine, but if you used let instead of const

let price2 = 100
const discount2 = 20 // you want to have 20% discount on the price
price2 = price2 * ((100 - discount2)) / 100
console.log('Sale Price: £${newPrice2}') // 80

//The let keyword is block-scoped, meaning that it is 
// limited to the block in which it is declared.
//It uses less memory and is faster than var.

//Only use let if you need to reassign the variable.
//Best practice is to use const whenever possible.



