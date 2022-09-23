const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    roomId: mongoose.Schema.Types.ObjectId,
    description: String,
    price: {
        type: Number, 
        required: true
    },
    maxPeople: {
        type: Number,
        min: 1
    },
    availability: Boolean

});

module.exports = mongoose.model('Room', roomSchema);