//Loops are used to execute the same block of code a s
// pecified number of times or while a specified condition 
// is true.
// //There are three types of loops in JavaScript:
// for loop - loops through a block of code a number of times
// while loop - loops through a block of code while a specified condition is true
// do...while loop - loops through a block of code once, and then repeats the loop while a specified condition is true

// For Loop example:
//for (initialization; condition; increment) { }
//i++ is equivalent to i = i + 1
//It first checks the condition. If it is true, the code block will run.
for (let i=1; i<=5; i++) { //it will start from 1 and end at 5
    //It will run 5 times by incrementing the value of i by 1 each time.
    //i+1=1+1=2, 2+1=3, 3+1=4, 4+1=5, 5+1=6, but it will stop at 5.
    console.log("INDEX", i); //output: 1, 2, 3, 4, 5
}
console.log("______________"); //output: ______________
console.log(""); //output:

const fruits = ["apple", "orange", "banana", "kiwi", "mango"];
for (let fruit = 0; fruit < fruits.length; fruit++) {
    console.log("This is a", fruits[fruit]); 
} //output: This is a apple, This is a orange, This is a banana, This is a kiwi, This is a mango

console.log("______________"); //output: ______________
console.log(""); //output:

const fruits1 = ["apple", "orange", "banana", "kiwi", "mango"];
for (let fruit = 0; fruit < fruits.length; fruit++) {
    console.log("This is a", fruits[fruit]); 
    if (fruits1[fruit] === "banana") {
        console.log("I found a banana!");
    }
} 
// While Loop steps:
//initialization - let i = 0; - it is the starting point of the loop.
//while (condition) { } - executes the code block as long as the condition is true.
//code block to be executed - console.log("INDEX", i); - it will print the value of i.
//increment - i++ - it will increment the value of i by 1.
// } - end of the loop.

console.log("______________"); //output: ______________
console.log(""); //output:

//Example of a While Loop:

let count = 0;
while (count < 6) { //it will run until the value of count is less than 5 - no infinite loop
    console.log("COUNTER", count); //output: 0, 1, 2, 3, 4, 5
    count++; //increment the value of count by 1
}

console.log("______________"); //output: ______________
console.log(""); //output:

let digit = 0;
while (digit < 23) { //it will run until the value of digit is less than 5 - no infinite loop
    console.log("COUNTER", digit); //output: 0, 1, 2, 3, 4, 5
    digit=digit+2; //increment the value of digit by 2
}

console.log("______________"); //output: ______________
console.log(""); //output:

//countdown
let countdown = 10;
while (countdown > 0) {
    console.log("COUNTDOWN", countdown);
    countdown--;
}