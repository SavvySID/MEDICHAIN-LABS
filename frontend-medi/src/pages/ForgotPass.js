// src/pages/ForgotPass.js

import React, { useState } from 'react';
import './ForgotPass.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setMessage(''); // Clear previous messages
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call for password reset
    setTimeout(() => {
      setMessage('A password reset link has been sent to your email address.');
      setIsLoading(false);
      setEmail(''); // Clear the input field after submission
    }, 2000);
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Your Password?</h2>
      <p className="forgot-password-subtitle">
        Enter your email address below to receive a password reset link.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>

        <button
          type="submit"
          className="forgot-password-button"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      {message && <p className="message">{message}</p>}

      <div className="forgot-password-footer">
        <p>Remembered your password? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
};

export default ForgotPassword;
