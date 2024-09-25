// server/controllers/recordController.js

const HealthRecord = require('../models/HealthRecord');

/**
 * Creates a new health record for a user.
 * @param {string} userId - The ID of the user to whom the record belongs.
 * @param {string} title - The title of the health record.
 * @param {string} details - The details of the health record.
 * @returns {Object} The created health record object.
 */
const createHealthRecord = async (userId, title, details) => {
    try {
        const healthRecord = new HealthRecord({ userId, title, details });
        await healthRecord.save();
        return healthRecord;
    } catch (error) {
        throw new Error('Error creating health record: ' + error.message);
    }
};

/**
 * Retrieves all health records for a user.
 * @param {string} userId - The ID of the user whose records to retrieve.
 * @returns {Array} An array of health records.
 */
const getHealthRecords = async (userId) => {
    try {
        const records = await HealthRecord.find({ userId });
        return records;
    } catch (error) {
        throw new Error('Error retrieving health records: ' + error.message);
    }
};

/**
 * Retrieves a health record by ID for a user.
 * @param {string} userId - The ID of the user whose record to retrieve.
 * @param {string} recordId - The ID of the health record to retrieve.
 * @returns {Object} The health record object.
 */
const getHealthRecordById = async (userId, recordId) => {
    try {
        const record = await HealthRecord.findOne({ userId, _id: recordId });
        if (!record) {
            throw new Error('Health record not found');
        }
        return record;
    } catch (error) {
        throw new Error('Error retrieving health record: ' + error.message);
    }
};

/**
 * Updates a health record by ID.
 * @param {string} userId - The ID of the user whose record to update.
 * @param {string} recordId - The ID of the health record to update.
 * @param {string} title - The updated title of the health record.
 * @param {string} details - The updated details of the health record.
 * @returns {Object} The updated health record object.
 */
const updateHealthRecord = async (userId, recordId, title, details) => {
    try {
        const updatedRecord = await HealthRecord.findOneAndUpdate(
            { userId, _id: recordId },
            { title, details, updatedAt: Date.now() },
            { new: true }
        );
        if (!updatedRecord) {
            throw new Error('Health record not found');
        }
        return updatedRecord;
    } catch (error) {
        throw new Error('Error updating health record: ' + error.message);
    }
};

/**
 * Deletes a health record by ID.
 * @param {string} userId - The ID of the user whose record to delete.
 * @param {string} recordId - The ID of the health record to delete.
 */
const deleteHealthRecord = async (userId, recordId) => {
    try {
        const result = await HealthRecord.findOneAndDelete({ userId, _id: recordId });
        if (!result) {
            throw new Error('Health record not found');
        }
    } catch (error) {
        throw new Error('Error deleting health record: ' + error.message);
    }
};

module.exports = {
    createHealthRecord,
    getHealthRecords,
    getHealthRecordById,
    updateHealthRecord,
    deleteHealthRecord
};
