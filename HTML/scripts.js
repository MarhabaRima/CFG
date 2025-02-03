//document.write("Hello World! ");

//document.addEventListener("DOMContentLoaded", () => {
//    console.log(document.getElementById("greet"), "Element by ID");
//}); //output: <div id="greet">Hello World!</div> 
//By using the getElementById() method, 
// we can access the HTML element with the specified id attribute.
// The method returns the element as an object (element object).
// The object can be used to access the element's properties and methods.
// The innerHTML property sets or returns the HTML content (inner HTML) of an element.
// The innerHTML property is useful for getting or replacing the content of an HTML element.
// In this example, the innerHTML property is used to get the content of the element with the id "greet".
// The content is then logged to the console.

document.addEventListener("DOMContentLoaded", () => {
    // Get the element with ID "message"
    const messageElement = document.getElementById("message");

    // Check if the element exists
    if (messageElement) {
        const value = messageElement.textContent; // Get the initial text ("Hello 👋")

        let result = "";

        // Append "Hello 👋" 20 times
        for (let i = 0; i < 20; i++) {
            result += value + " ";
        }

        // Update the content of the "message" element with the final result
        messageElement.textContent = result; 

        // Optionally log the final result to the console
        console.log(result);
    } else {
        console.error("Element with ID 'message' not found.");
    }/
});