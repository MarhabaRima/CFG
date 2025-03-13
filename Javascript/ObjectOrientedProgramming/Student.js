// Define the class
class Student {
    constructor(firstName, lastName) { // Constructor
        this.firstName = firstName // Propoerties
        this.lastName = lastName
    }
    displayFullName() { // Method that defines the behavior
        return `${this.firstName} ${this.lastName}`
    }
}

// Create instance of the class
const student1 = new Student('John', 'Doe')
const student2 = new Student('Jane', 'Doe')

// Display the full name
console.log(student1.displayFullName()) // John Doe
console.log(student2.displayFullName()) // Jane Doe