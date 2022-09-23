const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    hotelId: mongoose.Schema.Types.ObjectId,
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    address: String,
    rooms: [mongoose.Schema.Types.ObjectId],
    //TODO photos: String
});

module.exports = mongoose.model('Hotel', hotelSchema);