import React from 'react';
import './PrivacyPolicy.css'; // Add specific styles for the privacy policy

const PrivacyPolicy = () => {
    return (
        <div className="privacy-container">
            <h1>Privacy Policy</h1>

            <p>Last Updated: September 25, 2024</p>

            <p>Welcome to MediChain Labs. We are committed to protecting your personal data and your privacy. This Privacy Policy explains how we collect, use, and share your information when you use our platform.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide to us directly, such as:</p>
            <ul>
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, etc.</li>
                <li><strong>Health Information:</strong> Health records and data shared with us.</li>
            </ul>
            <p>We also collect information automatically, including:</p>
            <ul>
                <li><strong>Device Information:</strong> Details about your computer, browser, and IP address.</li>
                <li><strong>Usage Data:</strong> Pages viewed, time spent on our platform, and other interactions.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information collected for the following purposes:</p>
            <ul>
                <li>To provide and maintain our services.</li>
                <li>To communicate with you regarding updates or inquiries.</li>
                <li>To ensure the security of your data and our platform.</li>
            </ul>

            <h2>3. Sharing of Information</h2>
            <p>We do not sell or rent your personal data. We may share your information with trusted third-party service providers for:</p>
            <ul>
                <li>Processing transactions and storing data securely.</li>
                <li>Complying with legal obligations or governmental authorities.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We use industry-standard security measures to protect your personal data. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>

            <h2>5. Your Privacy Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access the personal information we hold about you.</li>
                <li>Request corrections to any inaccuracies in your data.</li>
                <li>Request deletion of your data, subject to certain legal obligations.</li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law.</p>

            <h2>7. Third-Party Links</h2>
            <p>Our platform may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.</p>

            <h2>8. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date at the top.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <p className="contact-info">
                <strong>Email:</strong> privacy@medichainlabs.com <br />
                <strong>Address:</strong> 1234 HealthTech Blvd, Suite 567, San Francisco, CA 94111
            </p>
        </div>
    );
};

export default PrivacyPolicy;
