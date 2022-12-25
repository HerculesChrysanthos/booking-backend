const mongoose = require('mongoose');
const User = require('../models/user.model');

async function registerUser(user) {
    return User.create(user);
}

async function findUser(email) {
    return User.findOne({ email });
}

module.exports = {
    registerUser,
    findUser,
}