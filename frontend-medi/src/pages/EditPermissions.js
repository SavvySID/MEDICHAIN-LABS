// src/pages/EditPermissions.js

import React, { useEffect, useState } from 'react';
import './EditPermissions.css';

const EditPermissions = () => {
  const [permissions, setPermissions] = useState([]);
  const [newPermission, setNewPermission] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch current permissions from the blockchain or backend
    const fetchPermissions = async () => {
      try {
        // Placeholder for fetching permissions
        const currentPermissions = [
          { id: 1, entity: 'Dr. John Doe', accessType: 'Read' },
          { id: 2, entity: 'City Hospital', accessType: 'Read/Write' },
        ];
        setPermissions(currentPermissions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching permissions:', error);
        setLoading(false);
      }
    };

    fetchPermissions();
  }, []);

  const handleAddPermission = () => {
    if (newPermission.trim()) {
      // Add the new permission to the blockchain or backend
      const updatedPermissions = [
        ...permissions,
        { id: permissions.length + 1, entity: newPermission, accessType: 'Read' },
      ];
      setPermissions(updatedPermissions);
      setNewPermission('');
    }
  };

  const handleRevokePermission = (id) => {
    // Revoke the permission on the blockchain or backend
    const updatedPermissions = permissions.filter((permission) => permission.id !== id);
    setPermissions(updatedPermissions);
  };

  if (loading) {
    return <div className="edit-permissions">Loading...</div>;
  }

  return (
    <div className="edit-permissions">
      <h1>Edit Permissions</h1>
      <div className="edit-permissions__list">
        <h2>Current Permissions</h2>
        {permissions.length > 0 ? (
          <ul>
            {permissions.map((permission) => (
              <li key={permission.id} className="edit-permissions__item">
                <span>{permission.entity} - {permission.accessType}</span>
                <button onClick={() => handleRevokePermission(permission.id)} className="edit-permissions__revoke-button">
                  Revoke
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No permissions granted.</p>
        )}
      </div>
      <div className="edit-permissions__add">
        <h2>Add New Permission</h2>
        <input
          type="text"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
          placeholder="Entity Name (e.g., Dr. Jane Doe)"
          className="edit-permissions__input"
        />
        <button onClick={handleAddPermission} className="edit-permissions__add-button">
          Add Permission
        </button>
      </div>
    </div>
  );
};

export default EditPermissions;
