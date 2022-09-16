const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('User', userSchema);