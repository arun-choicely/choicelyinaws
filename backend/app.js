const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
// Use the environment variable for the MongoDB URI
const mongoURI = process.env.MONGO_URI;
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false); // or true, depending on your preference

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

// Import models
const UserProfile = require('./models/UserProfile');
const Partnership = require('./models/Partnership');
// Example of using the models
app.post('/create-profile', async (req, res) => {
    const { profileType, ...otherFields } = req.body;
    const profile = new UserProfile({ profileType, ...otherFields });
    try {
        await profile.save();
        res.status(201).send('Profile created successfully');
    } catch (err) {
        res.status(500).send('Failed to create profile');
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

