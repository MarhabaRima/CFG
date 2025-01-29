//Objects are used to store collections of data and 
// more complex entities.

//Example:
const personObject = {
    //key: value
    name: 'Rima', //key: name, value: Rima - String
    age: 29, //key: age, value: 29 - Number
    city: 'London',
    address: {
        number: 123,
        street: 'Oxford Street',
        postcode: 'W1D 1LU'
    },
    friends: ['Annie', 'Jess', 'Fatemah', 'Salma'], //key: friends, value: ['Annie', 'Jess', 'Fatemah', 'Salma'] - Array
    travelDestination: 'South Korea' //key: travelDestination, value: South Korea - String
}
//we have one variable called personObject
//it has 4 key value pairs
//it is better than storing the data in separate variables
//accessing the values of the object
console.log("My name is: ", personObject.name); //output: My name is:  Rima
console.log("I am: ", personObject.age); //output: I am:  29
console.log("I live in: ", personObject.city); //output: I live in:  London
console.log("I want to travel to: ", personObject.travelDestination); //output: I am want to travel to:  South Korea