interface Individual {
    name: string;
    age: number;
    address?: string;
}

function greet(person: Individual) {
    const {name, age, address} = person; // Destructuring the object person
    // If the address is not provided, it will be undefined
    let greeting = `Hello, ${name}! You are ${age} years old.`;
    if (address) { // If the address is provided
        greeting += ` You live at ${address}.`; //concatenating the address to the greeting through += operator
    }
    return greeting;
}
