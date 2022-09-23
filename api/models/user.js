const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
      },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('User', userSchema);