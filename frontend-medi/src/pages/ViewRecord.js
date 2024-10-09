import React, { useState, useEffect } from 'react';
import './ViewRecord.css'; // Add specific styles for Viewing Records

const ViewRecord = () => {
    const [records, setRecords] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch records from API (assuming there’s an endpoint to get records)
    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await fetch('/get_patient_records');
                const data = await response.json();
                setRecords(data.records);
            } catch (error) {
                console.error('Error fetching records:', error);
            }
        };
        fetchRecords();
    }, []);

    // Filter records based on search input
    const filteredRecords = records.filter((record) =>
        record.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.user_id.toString().includes(searchTerm)
    );

    return (
        <div className="view-record-section">
            <h2>View Patient Records</h2>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by First Name, Last Name, or User ID"
                className="search-input"
            />
            <table className="record-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Complaint</th>
                        <th>Diagnosis</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRecords.length > 0 ? (
                        filteredRecords.map((record) => (
                            <tr key={record.user_id}>
                                <td>{record.user_id}</td>
                                <td>{record.fname}</td>
                                <td>{record.mname}</td>
                                <td>{record.lname}</td>
                                <td>{record.gender}</td>
                                <td>{record.age}</td>
                                <td>{record.complaint}</td>
                                <td>{record.diagnosis}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">No records found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ViewRecord;
