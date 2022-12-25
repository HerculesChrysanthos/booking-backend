const mongoose = require('mongoose');
const User = require('../models/user.model');

async function registerUser(user) {
    return User.create(user);
}

module.exports = {
    registerUser,
}