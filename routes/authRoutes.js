const express = require('express');
const { signUp, login } = require('../controllers/authController');
const router = express.Router();

// Sign Up Route
router.post('/signup', signUp);

// Login Route
router.post('/login', login);

module.exports = router;
