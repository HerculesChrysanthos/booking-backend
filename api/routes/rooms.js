const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    res.status(200).json({ 
        message: "ola kala etsi mou"
    });
});

module.exports = router;