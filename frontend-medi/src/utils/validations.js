// src/utils/validations.js

/**
 * Validates if the input is a non-empty string.
 * @param {string} input - The input string to validate.
 * @returns {boolean} True if the input is a non-empty string, otherwise false.
 */
export const isNonEmptyString = (input) => {
    return typeof input === 'string' && input.trim().length > 0;
  };
  
  /**
   * Validates if the input is a valid email address.
   * @param {string} email - The email address to validate.
   * @returns {boolean} True if the input is a valid email address, otherwise false.
   */
  export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Validates if the input is a strong password.
   * A strong password contains at least 8 characters, including at least one uppercase letter,
   * one lowercase letter, one digit, and one special character.
   * @param {string} password - The password to validate.
   * @returns {boolean} True if the input is a strong password, otherwise false.
   */
  export const isStrongPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };
  
  /**
   * Validates if the input is a valid date in the format YYYY-MM-DD.
   * @param {string} date - The date string to validate.
   * @returns {boolean} True if the input is a valid date, otherwise false.
   */
  export const isValidDate = (date) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date) && !isNaN(new Date(date).getTime());
  };
  
  /**
   * Validates if the input is a valid phone number.
   * This example assumes a simple validation for international phone numbers.
   * @param {string} phone - The phone number to validate.
   * @returns {boolean} True if the input is a valid phone number, otherwise false.
   */
  export const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };
  