//In typescript you have to define the type of the variable
//If you define > const age: number = 30;
//If you then do > age = 'Rima' //Error: Type 'string' is not assignable to type 'number'.
//you can't change the type of the variable once it is defined

//Primitive types 
//number, string, boolean, null, undefined, symbol, void, bigint
const age: number = 30;
const firstName: string = 'Rima';
const isStudent: boolean = true;

//Array types
//Array is a collection of elements of the same type
const numbers: number[] = [1, 2, 3, 4, 5];
const alsoNumbers: Array<number> = [6, 7, 8, 9, 10]; //<> is defining the type of the array
const randomName: Array<string> = ['a', 'b']; //Array with a capital A

//Object types
//You can store objects in an array
type Person = {name: string; age: number};
const person: Person = {
    name: 'Rima',
    age: 30,
};
//You can also define the type of the object directly
//This is useful when you have an array of objects
const person1: {name: string; age: number} = {
    name: 'Rima',
    age: 30,
}

//Union and Intersection types
//Union types allow you to combine two or more types
//Intersection types allow you to combine two or more types
type StringOrNumber = string | number;
const value1: StringOrNumber = 32;
const value2: StringOrNumber = 'Amanda'; 
const mixedArray: StringOrNumber[] = [32, 53,'Hello'];

//Tuple types
//Tuple is an array with a fixed number of elements whose types are known
const tuple: [string, number] = ['Alice' , 23]

//Enum types
//Enums allow us to define a set of named constants
// A fixed list of possible values
enum Colour { //you can call enum anything
    Red,
    Green, 
    Blue,
} //Red = 0, Green = 1, Blue = 2
const favouriteColour: Colour = Colour.Green; //you have to reference the enum name before the value
