//Interfaces
//Interfaces are used to define the structure of an object. 
// It is a way to define the contract in your code.
interface Car {
    make: string;
    model: string;
    year?: number;
}
interface EV extends Car { // EV is an interface that extends the Car interface
    batteryCapacity: number; //It has an additional property batteryCapacity
} //can have multiple interfaces, separated by a comma
//Output would be Car, EV

interface FossilFuel extends Car {
    fuelType: string;
} // FossilFuel is an interface that extends the Car interface
// It has an additional property fuelType of type string 
//Output would be Car, EV, FossilFuel

const car1: Car = {
    make: 'Audi',
    model: 'A4',
    year: 2020,
}

const car2: Car = {
    make: 'Lexus',
    model: 'RX',
    year: 2021,
}