class Person {
    // Private Property
    #age // As it is a private property, it can't be accessed outside the class and it prevents you from directly changing it

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() { // This is a public method to access the private property
        return this.#age; // This is outside the private property, so it can be accessed
    }
    setAge() {
        if(newAge >= 0) {
            this.#age = newAge;
        }
        else {
            console.log('Age must be a positive number');
        }
    }
}

// Create an instance of the Person class
const person1 = new Person('John', 30);
person1.setAge(-10); // Age must be a positive number
person1.setAge(40); // This will set the age to 40

// Access the properties
console.log(person1.name); // John
console.log(person1.getAge); // 30

