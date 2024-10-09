import React, { useState } from 'react';
import './HealthRecords.css';

const HealthRecord = () => {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    age: '',
    sex: '',
    Symptoms: '',
    temperature: '',
    history_of_any_drug_allergy: '',
    history_of_past_illness: '',
    medication: '',
    diagnosis: '',
  });

  const [file, setFile] = useState(null); // New state for handling file upload

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the uploaded file to state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords([...records, formData]);
    setFormData({
      date: '',
      name: '',
      age: '',
      sex: '',
      Symptoms: '',
      temperature: '',
      history_of_any_drug_allergy: '',
      history_of_past_illness: '',
      medication: '',
      diagnosis: '',
    });
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (file) {
      alert(`File ${file.name} uploaded successfully!`); // You can replace this with your file upload logic
      setFile(null); // Clear file after upload
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="health-record-container">
      {/* Left Section: Input Form for Health Details */}
      <div className="patient-form-card">
        <h2>Health Record Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Date:</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Sex:</label>
            <select name="sex" value={formData.sex} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Symptoms:</label>
            <input type="text" name="Symptoms" value={formData.Symptoms} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Temperature:</label>
            <input type="number" name="temperature" value={formData.temperature} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>History of any Drug Allergy:</label>
            <input type="text" name="history_of_any_drug_allergy" value={formData.history_of_any_drug_allergy} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>History of Past Illness:</label>
            <input type="text" name="history_of_past_illness" value={formData.history_of_past_illness} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Medication:</label>
            <input type="text" name="medication" value={formData.medication} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Diagnosis:</label>
            <input type="text" name="diagnosis" value={formData.diagnosis} onChange={handleChange} required />
          </div>

          <button type="submit" className="submit-btn">Add Record</button>
        </form>
      </div>

      {/* Right Section: OPD Findings (Record List) */}
      <div className="opd-records-card">
        <h2>IPD/OPD Records</h2>

        <table className="opd-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Symptoms</th>
              <th>Temperature</th>
              <th>History of any Drug Allergy</th>
              <th>History of Past Illness</th>
              <th>Medication</th>
              <th>Diagnosis</th>
            </tr>
          </thead>
          <tbody>
            {records.length > 0 ? (
              records.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.name}</td>
                  <td>{record.age}</td>
                  <td>{record.sex}</td>
                  <td>{record.Symptoms}</td>
                  <td>{record.temperature} °C</td>
                  <td>{record.history_of_any_drug_allergy}</td>
                  <td>{record.history_of_past_illness}</td>
                  <td>{record.medication}</td>
                  <td>{record.diagnosis}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No records available</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* File Upload Section */}
        <div className="file-upload-section">
          <h2>Upload Medical Report</h2>
          <form onSubmit={handleFileSubmit}>
            <div className="form-group">
              <label>Select file to upload:</label>
              <input type="file" onChange={handleFileChange} required />
            </div>
            <button type="submit" className="submit-btn">Upload File</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HealthRecord;
