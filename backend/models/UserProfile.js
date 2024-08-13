const mongoose = require('mongoose');

// Define the schema for user profiles
const UserProfileSchema = new mongoose.Schema({
    profileType: {
        type: String,
        required: true,
        enum: ['Brand', 'Creator'],
    },
    brandName: {
        type: String,
        required: function() {
            return this.profileType === 'Brand';
        }
    },
    product: {
        type: String,
        required: function() {
            return this.profileType === 'Brand';
        }
    },
    pictureOfProduct: {
        type: String,
        required: function() {
            return this.profileType === 'Brand';
        }
    },
    phoneNumber: {
        type: String,
        required: true
    },
    monthlyAdSpend: {
        type: String,
        enum: ['0-99K', '100-200K', '200-500K', '500-1M'],
        required: function() {
            return this.profileType === 'Brand';
        }
    },
    displayName: {
        type: String,
        required: function() {
            return this.profileType === 'Creator';
        }
    },
    IGHandle: {
        type: String,
        required: function() {
            return this.profileType === 'Creator';
        }
    },
    pricePerVideo: {
        type: Number,
        required: function() {
            return this.profileType === 'Creator';
        }
    },
    IGFollowerCount: {
        type: Number,
        required: function() {
            return this.profileType === 'Creator';
        }
    },
    combinedFollowerCount: {
        type: Number,
        required: function() {
            return this.profileType === 'Creator';
        }
    },
    profilePicture: {
        type: String,
        required: function() {
            return this.profileType === 'Creator';
        }
    },
    address: {
        type: String,
        required: function() {
            return this.profileType === 'Creator';
        }
    },
});

// Create a model from the schema
const UserProfile = mongoose.model('UserProfile', UserProfileSchema);

// Export the model
module.exports = UserProfile;

