class Car {
    constructor(make, model, year) { // Constructor
        // Initialize properties
        this.make = make; 
        this.model = model;
        this.year = year;
    }
    // Method to display the car information
    display_car_info() { 
        return `This car is an ${this.make} ${this.model} ${this.year}`;
    }
}

// Create instances of the Car class
const Car1 = new Car('Audi', 'A8', 2020);
const Car2 = new Car('Mercedes', 'Benz', 2021);
const Car3 = new Car('Buggati', 'Veyron', 2022);

// Display the car information
console.log(Car1.display_car_info()); // This car is an Audi A8 2020
console.log(Car2.display_car_info()); // This car is an Mercedes Benz 2021
console.log(Car3.display_car_info()); // This car is an Buggati Veyron 2022