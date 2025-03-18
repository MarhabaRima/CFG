 // Base class 
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        return `This car is a ${this.make} ${this.model} ${this.year}`;
    }
}

// Subclass for Electric Cars
class ElectricCar extends Car {
    constructor(make, model, year, batteryCapacity) {
        super(make, model, year);
        this.batteryCapacity = batteryCapacity; // batteryCapacity in kWh
    }
    // Method to estimate the range of the car
    estimateRange() {
        return `${this.make} can travel up to ${this.batteryCapacity * 5} km on a full charge`;
    }
}

// Create instances of the ElectricCar class
const electricCar1 = new ElectricCar('Tesla', 'Model S', 2021, 100);
const electricCar2 = new ElectricCar('Audi', 'e-tron', 2022, 95);

// Display the car information
console.log(electricCar1.displayInfo()); // This car is a Tesla Model S 2021

// Display the estimated range
console.log(electricCar1.estimateRange()); // Tesla can travel up to 500 km on a full charge

