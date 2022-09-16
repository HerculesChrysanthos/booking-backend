const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    hotelId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Hotel', hotelSchema);