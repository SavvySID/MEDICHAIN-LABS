import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Company Info */}
                <div className="footer-section company-info">
                    <h3>Medichain Labs</h3>
                    <p>Your company description or tagline goes here. You can add additional company information as well.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/Help">FAQ</a></li>
                        
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-section social-media">
                    <h3>Follow Us</h3>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>&copy; 2024 Company Name. All rights reserved.</p>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms">Terms&Conditions</a></li>
            </div>
        </footer>
    );
};

export default Footer;
