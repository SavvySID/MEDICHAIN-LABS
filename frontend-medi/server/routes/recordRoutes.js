// server/routes/recordRoutes.js

const express = require('express');
const router = express.Router();
const { 
    createHealthRecord, 
    getHealthRecords, 
    getHealthRecordById, 
    updateHealthRecord, 
    deleteHealthRecord 
} = require('../controllers/recordController');

// Route to create a new health record
router.post('/create', async (req, res) => {
    try {
        const { userId, title, details } = req.body;
        const record = await createHealthRecord(userId, title, details);
        res.status(201).json({ message: 'Health record created successfully', record });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get all health records for a user
router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const records = await getHealthRecords(userId);
        res.status(200).json(records);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get a health record by ID
router.get('/:userId/:recordId', async (req, res) => {
    try {
        const { userId, recordId } = req.params;
        const record = await getHealthRecordById(userId, recordId);
        res.status(200).json(record);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to update a health record
router.put('/update/:userId/:recordId', async (req, res) => {
    try {
        const { userId, recordId } = req.params;
        const { title, details } = req.body;
        const updatedRecord = await updateHealthRecord(userId, recordId, title, details);
        res.status(200).json({ message: 'Health record updated successfully', updatedRecord });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to delete a health record
router.delete('/delete/:userId/:recordId', async (req, res) => {
    try {
        const { userId, recordId } = req.params;
        await deleteHealthRecord(userId, recordId);
        res.status(200).json({ message: 'Health record deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
