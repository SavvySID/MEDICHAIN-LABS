// server/controllers/permissionController.js

const Permission = require('../models/Permission');

/**
 * Grants access permission to an entity for a user's health records.
 * @param {string} userId - The ID of the user granting the permission.
 * @param {string} entityId - The ID of the entity (user or provider) receiving the permission.
 * @param {string} accessType - The type of access ("read" or "read/write").
 * @returns {Object} The created or updated permission object.
 */
const grantAccessPermission = async (userId, entityId, accessType) => {
    try {
        // Check if the permission already exists
        let permission = await Permission.findOne({ userId, entityId });
        if (permission) {
            // Update the existing permission
            permission.accessType = accessType;
            permission.updatedAt = Date.now();
        } else {
            // Create a new permission
            permission = new Permission({ userId, entityId, accessType });
        }
        await permission.save();
        return permission;
    } catch (error) {
        throw new Error('Error granting access permission: ' + error.message);
    }
};

/**
 * Revokes access permission from an entity for a user's health records.
 * @param {string} userId - The ID of the user revoking the permission.
 * @param {string} entityId - The ID of the entity (user or provider) whose permission is being revoked.
 */
const revokeAccessPermission = async (userId, entityId) => {
    try {
        const result = await Permission.findOneAndDelete({ userId, entityId });
        if (!result) {
            throw new Error('Permission not found');
        }
    } catch (error) {
        throw new Error('Error revoking access permission: ' + error.message);
    }
};

/**
 * Retrieves all access permissions for a user's health records.
 * @param {string} userId - The ID of the user whose permissions to retrieve.
 * @returns {Array} An array of permission objects.
 */
const getAccessPermissions = async (userId) => {
    try {
        const permissions = await Permission.find({ userId });
        return permissions;
    } catch (error) {
        throw new Error('Error retrieving access permissions: ' + error.message);
    }
};

module.exports = {
    grantAccessPermission,
    revokeAccessPermission,
    getAccessPermissions
};
