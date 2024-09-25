import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <h1 className="services-title">Our Services</h1>
            <div className="services-content">
                <div className="service-card">
                    <h2>Blockchain-Based Health Records</h2>
                    <p>We provide secure and decentralized health record management using blockchain technology. Your medical data is safe, transparent, and accessible only to authorized individuals.</p>
                </div>
                
                <div className="service-card">
                    <h2>Permission Management</h2>
                    <p>Control who has access to your personal information. With our platform, you can grant or revoke permissions in real-time, ensuring privacy and security at all times.</p>
                </div>
                
                <div className="service-card">
                    <h2>Data Analytics for Healthcare Providers</h2>
                    <p>We provide advanced analytics tools for healthcare providers, allowing them to gain insights into patient data, improve outcomes, and optimize the care process.</p>
                </div>
                
                <div className="service-card">
                    <h2>Health Monitoring Tools</h2>
                    <p>Our health monitoring tools allow you to track vital signs and key health indicators, enabling you and your healthcare provider to proactively manage your health.</p>
                </div>
                
                <div className="service-card">
                    <h2>Secure Data Exchange</h2>
                    <p>Exchange medical data between providers, patients, and institutions in a secure and encrypted manner, ensuring that sensitive information remains private and untampered with.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
