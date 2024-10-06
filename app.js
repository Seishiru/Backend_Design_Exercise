const express = require('express');
const userRoutes = require('./routes/user');

const app = express();

// Middleware to parse request bodies (important for POST requests)
app.use(express.json());

// Define the route prefix
app.use('/api/user', userRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the backend application!!!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
