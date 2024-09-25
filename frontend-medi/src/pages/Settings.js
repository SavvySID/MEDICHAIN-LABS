import React from 'react';
import './Settings.css'; // Add specific styles for Settings

const Settings = () => {
    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <form className="settings-form">
                <label>Email</label>
                <input type="email" placeholder="user@example.com" />
                <label>Password</label>
                <input type="password" placeholder="••••••••" />
                <button type="submit" className="save-button">Save Changes</button>
            </form>
        </div>
    );
};

export default Settings;
