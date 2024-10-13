import React, { useState } from 'react';
import './InsurancePage.css';

const InsurancePage = () => {
  const [insuranceList, setInsuranceList] = useState([]);
  const [form, setForm] = useState({
    policyNumber: '',
    companyName: '',
    expiryDate: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!form.policyNumber || !form.companyName || !form.expiryDate) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    setErrorMessage('');

    // Add insurance record to list
    setInsuranceList([...insuranceList, form]);

    // Clear form inputs
    setForm({
      policyNumber: '',
      companyName: '',
      expiryDate: ''
    });
  };

  // Handle deletion of insurance record
  const handleDelete = (index) => {
    const updatedList = insuranceList.filter((_, i) => i !== index);
    setInsuranceList(updatedList);
  };

  return (
    <div className="container">
      <h2>Insurance Management</h2>

      {/* Form to Add Insurance */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="policyNumber"
          placeholder="Policy Number"
          value={form.policyNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={form.companyName}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="expiryDate"
          value={form.expiryDate}
          onChange={handleInputChange}
        />
        <button type="submit">Add Insurance</button>
      </form>

      {/* Error Message */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {/* Insurance Table */}
      <table>
        <thead>
          <tr>
            <th>Policy Number</th>
            <th>Company Name</th>
            <th>Expiry Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {insuranceList.length > 0 ? (
            insuranceList.map((insurance, index) => (
              <tr key={index}>
                <td>{insurance.policyNumber}</td>
                <td>{insurance.companyName}</td>
                <td>{insurance.expiryDate}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No records available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InsurancePage;
