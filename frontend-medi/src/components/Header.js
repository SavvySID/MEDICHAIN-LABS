// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import logo from '../assets/logo.png'; // Change 'assests' to 'assets'




const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <div className="header-logo">
      </div>
            <span className="header__logo-text">MEDICHAIN LABS</span>
            </Link>
            <nav className="header__nav">
                <Link to="/" className="header__nav-item">Home</Link>
                <Link to="/about" className="header__nav-item">About</Link>
                <Link to="/services" className="header__nav-item">Services</Link>
                <Link to="/Health-Records" className="header__nav-item"> Record</Link>
            </nav>
            <Link to="/Connect-Wallet" className="header__cta">Connect Wallet</Link>
            <Link to="/Login" className="header__cta">Login</Link>
            <Link to="/Register" className="header__cta">Register</Link>
        </header>
    );
};

export default Header;