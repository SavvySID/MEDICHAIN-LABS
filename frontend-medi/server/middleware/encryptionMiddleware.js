// server/middleware/encryptionMiddleware.js

const crypto = require('crypto');

// Secret key and initialization vector for AES encryption (store securely in production)
const ENCRYPTION_KEY = crypto.randomBytes(32); // 32 bytes for AES-256
const IV_LENGTH = 16; // AES block size
const ALGORITHM = 'aes-256-cbc';

/**
 * Encrypts text using AES-256-CBC.
 * @param {string} text - The text to encrypt.
 * @returns {string} The encrypted text in base64 format.
 */
const encrypt = (text) => {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
};

/**
 * Decrypts text using AES-256-CBC.
 * @param {string} text - The encrypted text in base64 format.
 * @returns {string} The decrypted text.
 */
const decrypt = (text) => {
    const textParts = text.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
};

/**
 * Middleware to encrypt sensitive data in the request body.
 */
const encryptMiddleware = (req, res, next) => {
    if (req.body && typeof req.body === 'object') {
        for (const key in req.body) {
            if (req.body.hasOwnProperty(key) && typeof req.body[key] === 'string') {
                req.body[key] = encrypt(req.body[key]);
            }
        }
    }
    next();
};

/**
 * Middleware to decrypt sensitive data in the request body.
 */
const decryptMiddleware = (req, res, next) => {
    if (req.body && typeof req.body === 'object') {
        for (const key in req.body) {
            if (req.body.hasOwnProperty(key) && typeof req.body[key] === 'string') {
                req.body[key] = decrypt(req.body[key]);
            }
        }
    }
    next();
};

module.exports = {
    encryptMiddleware,
    decryptMiddleware,
    encrypt,
    decrypt,
};
