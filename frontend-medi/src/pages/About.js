// src/pages/About.js

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Medichain Labs</h1>
      <section className="about__section">
        <h2>Our Mission</h2>
        <p>
          Medichain Labs aims to revolutionize the way personal health records are managed and shared. 
          By leveraging the power of blockchain technology, we provide a secure, decentralized platform 
          where individuals have full control over their health data.
        </p>
      </section>

      <section className="about__section">
        <h2>What We Offer</h2>
        <ul className="about__features-list">
          <li>Decentralized Storage: Your health data is securely stored on the blockchain.</li>
          <li>User-Controlled Access: You decide who can access your health records.</li>
          <li>Secure Data Sharing: Share your health information safely with healthcare providers.</li>
          <li>Transparency and Auditability: All access and modifications are transparently logged.</li>
        </ul>
      </section>

      <section className="about__section">
        <h2>Why Choose Medichain Labs?</h2>
        <p>
          With Medichain Labs, you can be confident that your personal health records are protected by 
          the latest advancements in blockchain technology. Our platform is designed to give you 
          complete control over your health data, ensuring privacy, security, and easy access whenever 
          you need it.
        </p>
      </section>

      <section className="about__section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or would like to learn more about Medichain Labs, please feel free 
          to contact us at <a href="mailto:contact@medichainlabs.com">contact@medichainlabs.com</a>.
        </p>
      </section>
    </div>
  );
};

export default About;
