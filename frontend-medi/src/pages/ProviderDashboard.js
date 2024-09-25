// src/pages/ProviderDashboard.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProviderDashboard.css';

const ProviderDashboard = () => {
  const [accessibleRecords, setAccessibleRecords] = useState([]);

  useEffect(() => {
    // Fetch the health records the provider has access to from the blockchain or backend
    const fetchAccessibleRecords = async () => {
      try {
        // Placeholder for fetching accessible records
        const records = [
          { id: 1, patientName: 'John Doe', recordType: 'Blood Test', date: '2024-09-01' },
          { id: 2, patientName: 'Jane Smith', recordType: 'X-Ray', date: '2024-08-25' },
        ];
        setAccessibleRecords(records);
      } catch (error) {
        console.error('Error fetching accessible health records:', error);
      }
    };

    fetchAccessibleRecords();
  }, []);

  return (
    <div className="provider-dashboard">
      <h1>Healthcare Provider Dashboard</h1>
      
      <section className="provider-dashboard__section">
        <h2>Accessible Health Records</h2>
        <div className="provider-dashboard__records">
          {accessibleRecords.length > 0 ? (
            <ul className="provider-dashboard__record-list">
              {accessibleRecords.map(record => (
                <li key={record.id} className="provider-dashboard__record-item">
                  <Link to={`/health-records/${record.id}`} className="provider-dashboard__record-link">
                    <h3>{record.recordType} - {record.patientName}</h3>
                    <p>Date: {record.date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>You currently have no accessible health records.</p>
          )}
        </div>
      </section>

      <section className="provider-dashboard__section">
        <h2>Request Access</h2>
        <p>If you need access to a patient's health records, please request it through the system.</p>
        <Link to="/request-access" className="provider-dashboard__request-access-button">
          Request Access
        </Link>
      </section>
    </div>
  );
};

export default ProviderDashboard;
