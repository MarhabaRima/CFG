//Arrays are a special type of objects. They hold multiple values in a single variable.
// Arrays are used to store multiple values in a single variable.
// Example

let fruit = "apple"; //single variable
let fruits = ["apple", "mango", "pear", "kiwi"]; //array variable
console.log("FRUITS:", fruits); //output: FRUITS: [ 'apple', 'orange', 'mango', 'kiwi' ]

//Elements in an array are accessed by their index number or position.
//Index numbers start from 0. The first element is at index 0, 
// the second is at index 1, and so on.
//apple is at index 0, 
// mango is at index 1, 
// pear is at index 2, 
// kiwi is at index 3.

//Accessing an Array Element
console.log("Fruit: " , fruits[1]) //output: Fruit:  mango
console.log("Fruit: " , fruits[2]) 
console.log("Fruit: " , fruits[3])
console.log("Fruit: " , fruits[0])
//output: MANGO:  mango

//arrays can hold different types of data
const mixedValues = [1, true, null, "Rima"];
console.log(fruits.length); //output: 4

//Add or Remove Elements from an Array
//push() method adds a new element to the end of an array.
fruits.push("orange");
console.log("Current Basket: ", fruits); //output: [ 'apple', 'mango', 'pear', 'kiwi', 'orange' ]
//pop() method removes the last element from an array.
fruits.pop();
console.log("Final Basket: ", fruits); //output: [ 'apple', 'mango', 'pear', 'kiwi' ]
fruits.pop();
console.log("Pop Basket: ", fruits); //output: [ 'apple', 'mango', 'pear' ]

//shift() method removes the first element from an array.
fruits.shift();
console.log("Shift Basket: ", fruits); //output: [ 'mango', 'pear' ]
//unshift() method adds a new element to the beginning of an array.
fruits.unshift("banana");
console.log("Unshift Basket: ", fruits); //output: [ 'banana', 'mango', 'pear' ]
//splice() method can be used to add new items to an array, remove items from an array, or replace items in an array.
fruits.splice(1, 0, "orange", "kiwi");
console.log("Splice Basket: ", fruits); //output: [ 'banana', 'orange', 'kiwi', 'mango', 'pear' ]
//slice() method extracts a section of an array and returns a new array.
let citrus = fruits.slice(1, 3);
console.log("Slice Basket: ", citrus); //output: [ 'orange', 'kiwi' ]
