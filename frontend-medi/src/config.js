// src/config.js

// API endpoints configuration
export const API_ENDPOINTS = {
  BASE_URL: 'http://localhost:5000/api', // Replace with your server's base URL
  AUTH: {
      REGISTER: '/auth/register',
      LOGIN: '/auth/login',
      LOGOUT: '/auth/logout',
  },
  RECORDS: {
      CREATE: '/records/create',
      GET: '/records',
      UPDATE: '/records/update',
      DELETE: '/records/delete',
  },
  PERMISSIONS: {
      GRANT: '/permissions/grant',
      REVOKE: '/permissions/revoke',
      GET: '/permissions',
  },
};

// Other configuration settings
export const APP_CONFIG = {
  APP_NAME: 'Medichain Labs',
  ENCRYPTION_KEY: 'your_encryption_key', // Use an environment variable in production
};
