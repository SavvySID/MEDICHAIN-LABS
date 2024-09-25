// server/models/Permission.js

const mongoose = require('mongoose');

// Define the Permission schema
const permissionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    entityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    accessType: {
        type: String,
        enum: ['read', 'read/write'],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Pre-save middleware to update the updatedAt field
permissionSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Create and export the Permission model
const Permission = mongoose.model('Permission', permissionSchema);
module.exports = Permission;
