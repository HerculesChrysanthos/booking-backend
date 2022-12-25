const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const  {validator} = require('../middleware/validate');
const userValidator = require('../middleware/user.validator');

const emailValidation = require('../middleware/emailValidation');
const userController = require('../controllers/user.controller');

// router.get('/', userController.getUsers);
router.post('/login', validator(userValidator.loginSchema), () => {
    console.log('ok')
});

router.post(
    '/register',
    validator(userValidator.registerSchema), 
    userController.registerUser
);

//router.post('/register', emailValidation.errors, userController.registerUser);

module.exports = router;
