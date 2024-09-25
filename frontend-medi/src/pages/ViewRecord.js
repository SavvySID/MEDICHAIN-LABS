// src/pages/ViewRecord.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ViewRecord.css';

const ViewRecord = () => {
  const { recordId } = useParams(); // Get the record ID from the URL
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the health record details from the blockchain or backend
    const fetchRecordDetails = async () => {
      try {
        // Placeholder for fetching record details
        const recordDetails = {
          id: recordId,
          title: 'Blood Test',
          date: '2024-09-01',
          description: 'Detailed report of blood test showing various metrics...',
          doctor: 'Dr. Jane Doe',
          hospital: 'City Hospital',
          additionalInfo: 'Patient needs to follow up in two weeks.'
        };

        setRecord(recordDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching record details:', error);
        setLoading(false);
      }
    };

    fetchRecordDetails();
  }, [recordId]);

  if (loading) {
    return <div className="view-record">Loading...</div>;
  }

  if (!record) {
    return <div className="view-record">Record not found.</div>;
  }

  return (
    <div className="view-record">
      <h1>{record.title}</h1>
      <p><strong>Date:</strong> {record.date}</p>
      <p><strong>Doctor:</strong> {record.doctor}</p>
      <p><strong>Hospital:</strong> {record.hospital}</p>
      <div className="view-record__description">
        <h3>Details</h3>
        <p>{record.description}</p>
      </div>
      <div className="view-record__additional-info">
        <h3>Additional Information</h3>
        <p>{record.additionalInfo}</p>
      </div>
    </div>
  );
};

export default ViewRecord;
