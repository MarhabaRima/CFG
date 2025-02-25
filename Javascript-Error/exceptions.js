const safeDivide = (numerator, denominator) => {
    try {
        if (denominator === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        result = numerator / denominator;
        console.log(result);
    } catch (error) {
        console.log('Error: ', error.message);
    }
}
safeDivide(10, 0); // Error: Division by zero is not allowed