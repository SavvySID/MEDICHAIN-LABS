// server/controllers/authController.js

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Secret key for JWT (ensure this is stored securely in an environment variable in production)
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with your secret key

/**
 * Registers a new user.
 * @param {string} username - The username of the new user.
 * @param {string} password - The password of the new user.
 * @param {string} email - The email of the new user.
 * @returns {Object} The created user object.
 */
const registerUser = async (username, password, email) => {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Create and save the new user
    const user = new User({ username, password, email });
    await user.save();
    return user;
};

/**
 * Logs in a user and returns a JWT token.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {string} A JWT token for the authenticated user.
 */
const loginUser = async (username, password) => {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Invalid username or password');
    }

    // Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid username or password');
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    return token;
};

/**
 * Logs out a user by clearing the authentication token (optional server-side logic).
 * @param {Object} req - The HTTP request object.
 */
const logoutUser = (req) => {
    // For JWT, logout is handled client-side by removing the token
    // Optional: Implement server-side logic for token invalidation (e.g., using a token blacklist)
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};
