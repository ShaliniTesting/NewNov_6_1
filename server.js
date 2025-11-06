// Basic Node.js server tutorial
// This server demonstrates Express.js with multiple endpoints

const express = require('express');
const app = express();
const PORT = 3000;

// Endpoint 1: Returns "Hello world"
// Accessible at: GET http://localhost:3000/hello
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

// Endpoint 2: Returns "Good evening"  
// Accessible at: GET http://localhost:3000/evening
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start the server and listen on configured PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export app for testing purposes
module.exports = app;
