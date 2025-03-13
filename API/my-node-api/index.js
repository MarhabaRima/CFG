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
const mysql = require('mysql2'); // Require the mysql2 package   
const app = express(); // Create an instance of express
const port = 3000; // Define the port number - common port

// Create a mysql connection pool
const pool = mysql.createPool({
    host: 'localhost', // MySQL server host
    user: 'root', // MySQL server username
    password: 'My21sq09l', // MySQL server password - you should secure this somewhere else
    database: 'social', // MySQL database name
    waitForConnections: true, // Whether the pool should wait for connections to become available if no connection is available
    connectionLimit: 10, // The maximum number of connections to create at once
    queueLimit: 0 // The maximum number of connection requests the pool should queue before returning an error
})

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

// Define the route:  GET request to the /users URL
app.get('/users', (req, res) => { // Define a GET request to the /users URL
    const sql = 'SELECT * FROM users' // Define the SQL query to select all users from the users table
    pool.query(sql, (err, results) => { // Execute the SQL query and it will either give an error or a result
        if (err) { //Error handling - if an error occurred
            console.error('Error fetching users:', err.message) // Log the error message to the console
            return res.status(500).json({error: `$(err.message}`}) // Send a response to the client if an error occurred
        }
        return res.status(200).json(results)
    })
})

//Let's try more complex routes
//Post request
app.post('/create-user', (req, res) => { // Define a POST request to the /create-user URL
    const {name, email, age} = req.body
    const sql = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)'
    pool.query(sql, [name, email, age], (err, result) => { // Execute the SQL query with the user data and it will either give an error or a result
        if (err) { //Error handling - if an error occurred
            return res.status(500).json({message: 'Database error'}) // Send a response to the client if an error occurred
        }
        res.status(201).json({id:result.insertId,message: 'User ${name} created successfully'}) // Send a response to the client if the user data is added successfully
    })
})
//The route above creates a new user by sending a POST request to the /create-user URL.
//Currently we are saying that the user data is added successfully but we are not actually adding it to the database.

//Everytime you make a change to the code, you need to restart the server

//Put request
//app.put('/update-user', (req, res) => { // Define a PUT request to the /update-user URL - issue with this code is that how do we know which user to update
app.put('/update-user/:id', (req,res)=>{ // Define a PUT request to the /update-user URL with a parameter
    const userId = req.params.id // Get the user ID from the request parameters
    const {name, email, age} = req.body // Get the user data from the request body
    const sql = 'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?' // Define the SQL query to update the user data
    pool.query(sql, [name, email, age, userId], (err, result) => { // Execute the SQL query with the user data and it will either give an error or a result
        if (err) { //Error handling - if an error occurred
            return res.status(500).json({error: `${err}`}) // Send a response to the client if an error occurred
        }
        if(result.affectedRows === 0) { // Check if the user data is updated successfully
            return res.status(404).json({message: 'User not found'}) // Send a response to the client if the user data is not found
        }
            res.status(200).json({message: 'User updated successfully'}) // Send a response to the client if the user data is updated successfully
        })
    })
//Delete request
app.delete('/delete-user/:id', (req, res) => {
    const userId = req.params.id; // Get the user ID from request parameters
    const sql = 'DELETE FROM users WHERE id = ?';
    pool.query(sql, [userId], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ message: `Database error: ${err.message}` });
        }
        // Check if any rows were deleted
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    })
})