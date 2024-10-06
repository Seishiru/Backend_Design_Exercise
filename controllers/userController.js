const users = require('../models/userModel');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

// Secret key for JWT (use a more secure one in production)
const JWT_SECRET = 'your_jwt_secret_key';

// Joi schema for validation
const userSchema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required()
});

// Register user
const register = (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { username, password, email } = req.body;
    const newUser = { id: users.length + 1, username, password, email };

    // Check if username or email already exists
    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists' });
    }

    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
};

// Login user
const login = (req, res) => {
    const { username, password } = req.body;

    // Validate login request body
    const { error } = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    }).validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
};

// Get user profile (protected route)
const getProfile = (req, res) => {
    const user = req.user; // populated by authMiddleware
    res.status(200).json({ message: 'User profile', user });
};

module.exports = { register, login, getProfile };
