const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    roomId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Room', roomSchema);