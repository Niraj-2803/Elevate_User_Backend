const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
const UserProfile = require('./models/UserProfile'); // Add this import
const cors = require('cors');


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/user', userRoutes);

// Get all user profiles
app.get('/', async (req, res) => {
  try {
    const userProfiles = await UserProfile.find(); // UserProfile imported above
    res.json(userProfiles);
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving user profiles.', error });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
