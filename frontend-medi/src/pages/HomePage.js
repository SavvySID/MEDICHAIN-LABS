// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage__header">
        <h1>Welcome to Medichain Labs</h1>
        <p>Your secure and decentralized personal health records system</p>
        <Link to="/register" className="homepage__cta">Get Started</Link>
      </header>
      
      <section className="homepage__features">
        <h2>Why Choose Medichain Labs?</h2>
        <div className="homepage__features-list">
          <div className="homepage__feature">
            <h3>Decentralized Storage</h3>
            <p>Your health data is securely stored on the blockchain, ensuring privacy and integrity.</p>
          </div>
          <div className="homepage__feature">
            <h3>User-Controlled Access</h3>
            <p>You have full control over who can access your health records with permission management.</p>
          </div>
          <div className="homepage__feature">
            <h3>Secure Data Sharing</h3>
            <p>Share your health information securely with healthcare providers using our platform.</p>
          </div>
        </div>
      </section>
      
      <section className="homepage__cta-section">
        <h2>Ready to take control of your health data?</h2>
        <Link to="/register" className="homepage__cta-button">Sign Up Now</Link>
      </section>
    </div>
  );
};

export default HomePage;
