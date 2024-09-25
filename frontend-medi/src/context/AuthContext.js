// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import { loginUser, logoutUser, isAuthenticated } from '../services/auth';

// Create a context for authentication
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(isAuthenticated());
  
  useEffect(() => {
    // Check authentication status on mount
    setIsAuth(isAuthenticated());
  }, []);

  /**
   * Handles user login.
   */
  const login = () => {
    try {
      const user = loginUser(); // Perform login using the loginUser service
      if (user) {
        setIsAuth(true);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  /**
   * Handles user logout.
   */
  const logout = () => {
    try {
      logoutUser(); // Perform logout using the logoutUser service
      setIsAuth(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
