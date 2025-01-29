//Variable Scope in Javascript defines the scope of a variable. The scope of a variable is the region of your program in which it is defined. JavaScript variable will have only two scopes.
//It determines the accessibility of a variable. 
// The scope of a variable is the region of your program in 
// which it is defined. JavaScript variable will have only two 
// scopes.
// Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.
// Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

// Example 1 
const thing = 1
console.log(thing) // 1 - thing is a global variable

//Example 2
let result = 'cheese'// global variable
function addEmojis(message, emoji) {
    result = emoji + " " + message + " " + emoji
}
addEmojis('Hello', '😊')
console.log(result) // 😊 Hello 😊 

//You can access the global variable inside the function. 
//Declaring let outside the function makes it a global variable.
//You can access the global variable inside the function.
//The global variable can be accessed and modified inside the function.