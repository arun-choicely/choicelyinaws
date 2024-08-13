const mongoose = require('mongoose');

// Define the schema for partnerships
const PartnershipSchema = new mongoose.Schema({
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
        required: true
    },
    inviteLink: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Rejected'],
        default: 'Pending'
    }
});

// Create a model from the schema
const Partnership = mongoose.model('Partnership', PartnershipSchema);

// Export the model
module.exports = Partnership;

