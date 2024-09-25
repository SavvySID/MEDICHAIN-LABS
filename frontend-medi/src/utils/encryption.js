// src/utils/encryption.js

import CryptoJS from 'crypto-js';

// Replace this with a secure key. In a production environment, ensure this key is securely stored.
const SECRET_KEY = 'your-very-secure-key';

/**
 * Encrypts data using AES encryption.
 * @param {string} data - The data to encrypt.
 * @returns {string} The encrypted data in string format.
 */
export const encryptData = (data) => {
  try {
    const ciphertext = CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
    return ciphertext;
  } catch (error) {
    console.error('Error encrypting data:', error);
    throw new Error('Encryption failed');
  }
};

/**
 * Decrypts data that was encrypted using AES encryption.
 * @param {string} ciphertext - The encrypted data to decrypt.
 * @returns {string} The decrypted data in string format.
 */
export const decryptData = (ciphertext) => {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  } catch (error) {
    console.error('Error decrypting data:', error);
    throw new Error('Decryption failed');
  }
};
