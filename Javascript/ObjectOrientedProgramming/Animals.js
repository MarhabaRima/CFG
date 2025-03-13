// Set Base class
class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }
    // Method
    makeSound() {
        return `${this.name} makes a sound: ${this.sound}`;
    }
}

const animal = new Animal('Cat', 'Meow');

console.log(animal.makeSound()); // Cat makes a sound: Meow

// Set Inheritance class
class Dog extends Animal {
    constructor(name, sound, breed) {
        super(name, sound)
        this.breed = breed
    }
    // Method
    bark() {
        return `${this.breed} barks: Woof Woof!`
    }
}

const dog1 = new Dog('Fluffles', 'Woof', 'Labrador');

// Call the method from the Inheritance class
// through inheritance we have got makeSound() method from the base class and bark() method from the inheritance class

console.log(dog1.makeSound()); // Fluffles makes a sound: Woof
console.log(dog1.bark()); // Labrador barks: Woof Woof!