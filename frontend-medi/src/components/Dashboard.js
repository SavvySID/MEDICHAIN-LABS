import React from 'react';
import './Dashboard.css'; 

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Welcome to Your Dashboard</h1>
            <div className="stats-section">
                <div className="stat-card">
                    <h2>Total Health Records</h2>
                    <p>12 Records</p>
                </div>
                <div className="stat-card">
                    <h2>Last Updated</h2>
                    <p>September 20, 2024</p>
                </div>
            </div>
            <div className="recent-activity">
                <h2>Recent Activities</h2>
                <ul>
                    <li>Added new health record: Blood Test - September 20, 2024</li>
                    <li>Permissions updated for Dr. Smith - September 18, 2024</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
