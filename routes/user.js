const express = require('express');
const { register, login, getProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// User registration route
router.post('/register', register);

// User login route
router.post('/login', login);

// User profile route (protected)
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
