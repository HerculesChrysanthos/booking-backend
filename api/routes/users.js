const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');



const emailValidation = require('../middleware/emailValidation');
const userController = require('../controllers/users');

// router.get('/', userController.getUsers);




router.post('/register', emailValidation.errors, userController.registerUser);

module.exports = router;
