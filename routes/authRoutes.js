const express = require('express');
const router = express.Router();
const { register, login, getProfile } = require('../controllers/authControllers');
const authMiddleware = require('../midillwares/authMidillware');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
