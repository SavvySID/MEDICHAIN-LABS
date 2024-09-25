// src/hooks/useAuth.js

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser, logoutUser, isAuthenticated } from '../services/auth';

/**
 * Custom hook for handling authentication logic.
 */
const useAuth = () => {
  const [isAuth, setIsAuth] = useState(isAuthenticated());
  const history = useHistory();

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
        history.push('/dashboard'); // Redirect to dashboard after login
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
      history.push('/'); // Redirect to home page after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return {
    isAuth,
    login,
    logout,
  };
};

export default useAuth;
