// Set Base Class
class Shape{
    constructor(name) {
        this.name = name
    }

// Method to display the shape information
    calculateArea() {
        throw new Error('calculateArea method must be implemented by subclass')
    }
}

// Set Square Subclass
class Square extends Shape {
    constructor(sideLength) {
        super() // must always call the super() method first
        this.sideLength = sideLength
    }
    calculateArea() {
        return this.sideLength ** 2
    }
}

// Set Circle Subclass
class Circle extends Shape {
    constructor(radius) {
        super() // must always call the super() method first
        this.radius = radius
    }
    calculateArea() {
        return Math.PI * this.radius ** 2
    }
}

const sqaure1 = new Square(14)
const circle1 = new Circle(10)

console.log(sqaure1.calculateArea()) // 196
console.log(circle1.calculateArea()) // 314.1592653589793