// server/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');

// Route for user registration
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await registerUser(username, password);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route for user login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await loginUser(username, password);
        res.status(200).json({ message: 'User logged in successfully', token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route for user logout
router.post('/logout', (req, res) => {
    try {
        logoutUser(req);
        res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
