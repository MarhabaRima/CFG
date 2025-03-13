//Do not use type assertions unless you are sure of the type of the variable
//Not recommended to use type assertions

let value: any = 42; //any type allows you to change the type of the variable

//Asserting the type of the variable
let numberValue = value as number; //numberValue is now a number
console.log(numberValue * 4); //Output: 168

//Type assertions are dangerous because they can lead to runtime errors
//Type assertions are not type conversions
//Type assertions are a way to tell the compiler that you know what you are doing
//Only use type assertions when you are sure of the type of the variable

//Type assertions are done using the 'as' keyword
//Type assertions are also done using the <> syntax
