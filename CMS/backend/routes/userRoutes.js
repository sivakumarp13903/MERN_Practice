const express = require('express');
const router = express.Router();
const { signupUser, loginUser } = require('../controllers/userController');

// User signup route
router.post('/users/signup', (req, res) => {
    // Logic for handling signup
    res.status(201).send('User signed up successfully');
  });

// User login route
router.post('/login', loginUser);

module.exports = router;
