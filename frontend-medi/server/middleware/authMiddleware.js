// server/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

// Secret key for JWT (ensure this is stored securely in an environment variable in production)
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with your secret key

/**
 * Middleware to protect routes and verify user authentication.
 */
const authMiddleware = (req, res, next) => {
    try {
        // Get the token from the Authorization header
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach decoded user information to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token.' });
    }
};

module.exports = authMiddleware;
