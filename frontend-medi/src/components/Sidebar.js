// Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    // State to manage sidebar visibility
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle sidebar expansion
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {/* Sidebar Toggle Button */}
            <button className={`sidebar-toggle ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                {isExpanded ? '☰' : '☰'}
            </button>

            {/* Sidebar */}
            <aside className={`sidebar ${isExpanded ? 'active' : ''}`}>
                <div className="sidebar-section">
                    <h3>Menu</h3>
                    <a href="/Dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</a>
                    <a href="/Provider-Dashboard"><i className="fas fa-user-md"></i> Provider Dashboard</a>
                    <a href="/User-Dashboard"><i className="fas fa-user"></i> User Dashboard</a>
                    <a href="/Contact"><i className="fas fa-envelope"></i> Contact</a>
                    <a href="/Insurance"><i className="fas fa-user-shield"></i> Insurance</a>
                    <a href="/View-Record"><i className="fas fa-eye"></i> View Record</a>
                    <a href="/Permissions"><i className="fas fa-user-shield"></i> Permissions</a>
                    <a href="/Edit-Permissions"><i className="fas fa-edit"></i> Edit Permissions</a>
                    <h3>Other Links</h3>
                    <a href="/settings"><i className="fas fa-cog"></i> Settings</a>
                    <a href="/help"><i className="fas fa-question-circle"></i> Help</a>
                </div>
            </aside>

            {/* Main content that shifts when sidebar is open */}
            <div className={`content ${isExpanded ? 'shifted' : ''}`}>
                {/* Your main content goes here */}
            </div>
        </>
    );
};

export default Sidebar;
