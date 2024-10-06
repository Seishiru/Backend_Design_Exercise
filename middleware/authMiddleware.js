const jwt = require('jsonwebtoken');
const users = require('../models/userModel');

// Secret key for JWT
const JWT_SECRET = 'your_jwt_secret_key';

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    // Check if token starts with 'Bearer'
    const bearerToken = token.split(' ')[1];

    try {
        // Verify JWT token
        const decoded = jwt.verify(bearerToken, JWT_SECRET);
        
        // Find user based on the decoded token
        const user = users.find(u => u.id === decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user; // Attach user to request object
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
