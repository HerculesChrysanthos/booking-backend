const { body, validationResult } = require('express-validator');

exports.errors =  [
    body('email')
    .not()
    .isEmpty()
    .withMessage('Email must not be empty.')
    .bail()
    .isEmail()
    .withMessage('Invalid email address.'),
    (req , res, next) => {
        const errors = validationResult(req);

        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
        if (!errors.isEmpty()) {
            const response = 
                 errors.array().map(error => {
                    return {
                        field: error.param,
                        message: error.msg
                    }
                })
            
            return res.status(400).json(response);
        }
        next();
    }
];