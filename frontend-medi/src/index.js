// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css'; // Import global styles
import './styles/components.css'; // Import component-specific styles
import './styles/components.css';
import './styles/index.css';
import './styles/utilities.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { BlockchainProvider } from './context/BlockchainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BlockchainProvider>
        <App />
      </BlockchainProvider>
    </AuthProvider>
  </React.StrictMode>
);
