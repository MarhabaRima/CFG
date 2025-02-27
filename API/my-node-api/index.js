//Building an API with Node.js and Express
// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
// It is an open-source framework that is available under the MIT license.

// To create a simple API with Node.js and Express, you need to follow these steps:
// 1. Install Node.js
// 2. Create a new project folder
// 3. Initialize the project
// 4. Install Express
// 5. Create an index.js file
// 6. Define the route - This is where we are going to start
// 7. Start the server 

// Name the const as express and require the express package
const express = require('express'); 
const app = express(); // Create an instance of express
const port = 3000; // Define the port number - common port

// Define the route:  GET request to the root URL 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}) // Start the server and listen to the port 3000

app.use(express.json()); // Parse the request body as JSON
// allows the app to use JSON

// Define the route:  GET request to the root URL
// (req, res) => {} is an arrow function that takes two parameters: req and res
app.get('/', (_req, res) => { // req is the request object and res is the response object
    res.send('Welcome to our API');
}) // Send a response to the client with the message 'Welcome to our API'
//Up to here we built a basic endpoint that returns a message when we send a GET request to the root URL.

//Let's try more complex routes
//Post request
app.post('/create-user', (req, res) => { // Define a POST request to the /create-user URL
    const userData = req.body; // Get the user data from the request body
    //Imagine we add the user data to the database
    res.status(201).json({message: 'User created successfully', userData}) //201 is the status code for created
})
//The route above creates a new user by sending a POST request to the /create-user URL.
//Currently we are saying that the user data is added successfully but we are not actually adding it to the database.

//Everytime you make a change to the code, you need to restart the server

//Put request
//app.put('/update-user', (req, res) => { // Define a PUT request to the /update-user URL - issue with this code is that how do we know which user to update
app.put('/update-user/:id', (req,res)=>{ // Define a PUT request to the /update-user URL with a parameter
    const userId = req.params.id; // Get the user ID from the request parameters
    const updatedData = req.body; // Get the updated data from the request body
    //Imagine we update the user data in the database
    res.json({message: `User ${userId} updated successfully`, updatedData}) // Send a response to the client
})

//Delete request
app.delete('/delete-user/:id', (req, res) => { // Define a DELETE request to the /delete-user URL with a parameter
    const userId = req.params.id; // Get the user ID from the request parameters
    //Imagine we delete the user data from the database
    res.json({message: `User ${userId} deleted successfully`}) // Send a response to the client
})