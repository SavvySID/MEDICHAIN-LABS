// src/pages/UserDashboard.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  const [healthRecords, setHealthRecords] = useState([]);

  useEffect(() => {
    // Fetch the user's health records from the blockchain or backend
    const fetchHealthRecords = async () => {
      try {
        // Placeholder for fetching health records
        const records = [
          { id: 1, title: 'Blood Test', date: '2024-09-01' },
          { id: 2, title: 'X-Ray', date: '2024-08-25' },
        ];
        setHealthRecords(records);
      } catch (error) {
        console.error('Error fetching health records:', error);
      }
    };

    fetchHealthRecords();
  }, []);

  return (
    <div className="user-dashboard">
      <h1>Welcome to Your Dashboard</h1>
      
      <section className="user-dashboard__section">
        <h2>Your Health Records</h2>
        <div className="user-dashboard__records">
          {healthRecords.length > 0 ? (
            <ul className="user-dashboard__record-list">
              {healthRecords.map(record => (
                <li key={record.id} className="user-dashboard__record-item">
                  <Link to={`/health-records/${record.id}`} className="user-dashboard__record-link">
                    <h3>{record.title}</h3>
                    <p>Date: {record.date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>You have no health records available.</p>
          )}
        </div>
      </section>

      <section className="user-dashboard__section">
        <h2>Manage Permissions</h2>
        <p>Control who has access to your health records.</p>
        <Link to="/permissions" className="user-dashboard__manage-permissions-button">
          Manage Permissions
        </Link>
      </section>
      
      <section className="user-dashboard__section">
        <h2>Account Settings</h2>
        <p>Update your account information and preferences.</p>
        <Link to="/account" className="user-dashboard__account-settings-button">
          Account Settings
        </Link>
      </section>
    </div>
  );
};

export default UserDashboard;
