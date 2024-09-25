// server/config/env.js

const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
const result = dotenv.config({ path: path.resolve(__dirname, '../../.env') });

if (result.error) {
    throw new Error('Could not load .env file');
}

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/medichain-labs',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key',
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY || 'default_encryption_key',
    PORT: process.env.PORT || 3000,
};
