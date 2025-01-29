//Functions are used to perform a specific task. 
// You can reuse functions in your code.
// Functions are defined using the function keyword.


function banner() { // defining the function
    console.log('__________________________') // function body
    console.log('__________________________') 
}

banner(); // calling the function
console.log('Welcome to Functions')
banner(); // calling the function again

//Another way to do this:
function banner2() {
    return '__________________________\n__________________________'
}

console.log(banner2())
console.log('Welcome to Functions')
console.log(banner2())

//To use parameters in functions: 
//getSum is the function name
function getSum(num1, num2) { // num1 and num2 are parameters
    const answer = num1 + num2
    return answer
}

const functionOutput = getSum(23,531) // 23 and 531 are arguments

console.log(functionOutput) // 554

//Better way to write the function above:
function getSum2(num1, num2) {
    return num1 + num2
}

const functionOutput2 = getSum2(23,531) // 23 and 531 are arguments
console.log(functionOutput2) // 554
//This is the same as the function above, but shorter and cleaner.

