const express = require('express');
const router = express.Router();
const UserProfile = require('../models/UserProfile');

// Create/Update user profile
router.post('/profile', async (req, res) => {
  try {
    const userProfile = await UserProfile.create(req.body);
    res.status(201).json(userProfile);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user profile', error: error.message });
  }
});

// Get user profile
router.get('/profile/:id', async (req, res) => {
  try {
    const userProfile = await UserProfile.findById(req.params.id);
    if (!userProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(userProfile);
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving profile', error: error.message });
  }
});

module.exports = router;