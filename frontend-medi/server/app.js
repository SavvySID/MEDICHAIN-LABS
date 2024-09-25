// server/app.js

const express = require('express');
const connectDB = require('./config/db');
const config = require('./config/env');
const authRoutes = require('./routes/authRoutes');
const recordRoutes = require('./routes/recordRoutes');
const permissionRoutes = require('./routes/permissionRoutes');
const authMiddleware = require('./middleware/authMiddleware');

// Initialize the Express application
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/records', authMiddleware, recordRoutes); // Protected routes
app.use('/api/permissions', authMiddleware, permissionRoutes); // Protected routes

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'An unexpected error occurred!' });
});

// Start the server
const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
