import React from 'react';
import './Help.css'; // Add specific styles for Help

const Help = () => {
    return (
        <div className="help-container">
            <h1>Help & Support</h1>
            <div className="faq-section">
                <h3>Frequently Asked Questions</h3>
                <p><strong>Q:</strong> How do I add a new health record?</p>
                <p><strong>A:</strong> Navigate to the "Health Records" section and click the "Add New Record" button.</p>
                <p><strong>Q:</strong> How can I change my password?</p>
                <p><strong>A:</strong> Go to the "Settings" page and update your password under "Account Details."</p>
            </div>
            <div className="contact-section">
                <h3>Contact Support</h3>
                <p>If you need further assistance, please contact our support team at support@medichainlabs.com</p>
            </div>
        </div>
    );
};

export default Help;
