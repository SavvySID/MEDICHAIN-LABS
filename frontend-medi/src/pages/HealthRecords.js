import React, { useState } from 'react';
import './HealthRecords.css'; // Add specific styles for Health Records

const HealthRecords = () => {
    // State to manage health records
    const [healthRecords, setHealthRecords] = useState([
        { id: 1, title: "Blood Test", date: "September 20, 2024" },
        { id: 2, title: "MRI Scan", date: "August 15, 2024" },
        { id: 3, title: "Vaccination Record", date: "July 10, 2024" }
    ]);

    // State to manage new record inputs
    const [newRecordTitle, setNewRecordTitle] = useState('');
    const [newRecordDate, setNewRecordDate] = useState('');

    // State to manage viewing a single record
    const [viewRecord, setViewRecord] = useState(null);

    // Function to handle adding a new record
    const handleAddRecord = () => {
        if (newRecordTitle && newRecordDate) {
            const newRecord = {
                id: healthRecords.length + 1,
                title: newRecordTitle,
                date: newRecordDate
            };
            setHealthRecords([...healthRecords, newRecord]);
            setNewRecordTitle(''); // Reset input fields
            setNewRecordDate('');
        }
    };

    // Function to handle viewing a record
    const handleViewRecord = (record) => {
        setViewRecord(record);
    };

    return (
        <div className="health-records-container">
            <h1>Your Health Records</h1>
            
            {/* Form to add new health record */}
            <div className="add-record-form">
                <input 
                    type="text" 
                    placeholder="Record Title" 
                    value={newRecordTitle}
                    onChange={(e) => setNewRecordTitle(e.target.value)}
                    className="record-input"
                />
                <input 
                    type="date" 
                    placeholder="Record Date" 
                    value={newRecordDate}
                    onChange={(e) => setNewRecordDate(e.target.value)}
                    className="record-input"
                />
                <button 
                    className="add-record-button" 
                    onClick={handleAddRecord}
                >
                    Add New Record
                </button>
            </div>

            {/* View individual record details */}
            {viewRecord ? (
                <div className="view-record-container">
                    <h2>{viewRecord.title}</h2>
                    <p>Date: {viewRecord.date}</p>
                    <button onClick={() => setViewRecord(null)} className="back-button">
                        Back to Records
                    </button>
                </div>
            ) : (
                <ul className="records-list">
                    {healthRecords.map(record => (
                        <li 
                            key={record.id} 
                            className="record-item" 
                            onClick={() => handleViewRecord(record)}
                        >
                            <h3>{record.title}</h3>
                            <p>{record.date}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HealthRecords;
