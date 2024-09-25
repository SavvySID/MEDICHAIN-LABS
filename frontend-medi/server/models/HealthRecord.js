// server/models/HealthRecord.js

const mongoose = require('mongoose');

// Define the HealthRecord schema
const healthRecordSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    details: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

// Pre-save middleware to update the updatedAt field
healthRecordSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Create and export the HealthRecord model
const HealthRecord = mongoose.model('HealthRecord', healthRecordSchema);
module.exports = HealthRecord;
