//Comparison operators - allow us to compare two values and return a boolean value

const a = 10
const b = 10

console.log(a === b) // true

//You would use === over == because it is more strict a
// nd will not convert the values to the same type 
// before comparing them

//Helpful for checking if a value is null or undefined
//also useful for checking if a value is a number or a string

//e.g. 25 === '25' would return false
//e.g. 25 == '25' would return true

// !== is the opposite of ===
// != is the opposite of ==
// >, <, >=, <= are also available
