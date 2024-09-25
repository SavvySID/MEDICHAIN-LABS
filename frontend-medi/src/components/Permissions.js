import React, { useState } from 'react';
import './Permissions.css'; // Add specific styles for Permissions

const Permissions = () => {
    // State to track permissions
    const [permissions, setPermissions] = useState([
        { id: 1, name: "Dr. Smith", accessLevel: "View Only" },
        { id: 2, name: "LabCorp", accessLevel: "View and Edit" }
    ]);

    // Function to handle revoke access
    const handleRevoke = (id) => {
        // Filter out the permission with the specified id
        const updatedPermissions = permissions.filter(permission => permission.id !== id);
        setPermissions(updatedPermissions);
    };

    return (
        <div className="permissions-container">
            <h1>Manage Permissions</h1>
            <ul className="permissions-list">
                {permissions.map(permission => (
                    <li key={permission.id} className="permission-item">
                        <h3>{permission.name}</h3>
                        <p>Access Level: {permission.accessLevel}</p>
                        {/* Revoke button with click handler */}
                        <button 
                            className="revoke-button" 
                            onClick={() => handleRevoke(permission.id)}
                        >
                            Revoke Access
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Permissions;
