// src/services/auth.js

import { createAccount } from './blockchain';

const AUTH_KEY = 'medichain_auth';

/**
 * Registers a new user by creating an account on the Aptos blockchain.
 * @returns {Object} The registered user details including address and keys.
 */
export const registerUser = async () => {
  try {
    // Create a new Aptos account
    const account = await createAccount();
    
    // Store user details in local storage
    localStorage.setItem(AUTH_KEY, JSON.stringify(account));

    return account;
  } catch (error) {
    console.error('Error registering user:', error);
    throw new Error('Failed to register user');
  }
};

/**
 * Logs in the user by retrieving account details from local storage.
 * @returns {Object} The logged-in user details.
 */
export const loginUser = () => {
  try {
    const user = JSON.parse(localStorage.getItem(AUTH_KEY));
    if (!user) {
      throw new Error('No user found');
    }

    return user;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw new Error('Failed to log in user');
  }
};

/**
 * Logs out the user by removing account details from local storage.
 */
export const logoutUser = () => {
  try {
    localStorage.removeItem(AUTH_KEY);
  } catch (error) {
    console.error('Error logging out user:', error);
    throw new Error('Failed to log out user');
  }
};

/**
 * Checks if the user is authenticated by verifying the existence of user data in local storage.
 * @returns {boolean} True if the user is authenticated, otherwise false.
 */
export const isAuthenticated = () => {
  try {
    const user = localStorage.getItem(AUTH_KEY);
    return !!user;
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return false;
  }
};
