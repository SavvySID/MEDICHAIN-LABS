// server/routes/permissionRoutes.js

const express = require('express');
const router = express.Router();
const { 
    grantAccessPermission, 
    revokeAccessPermission, 
    getAccessPermissions 
} = require('../controllers/permissionController');

// Route to grant access permission to an entity
router.post('/grant', async (req, res) => {
    try {
        const { userId, entityId, accessType } = req.body;
        const permission = await grantAccessPermission(userId, entityId, accessType);
        res.status(201).json({ message: 'Access granted successfully', permission });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to revoke access permission from an entity
router.post('/revoke', async (req, res) => {
    try {
        const { userId, entityId } = req.body;
        await revokeAccessPermission(userId, entityId);
        res.status(200).json({ message: 'Access revoked successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get all access permissions for a user
router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const permissions = await getAccessPermissions(userId);
        res.status(200).json(permissions);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
