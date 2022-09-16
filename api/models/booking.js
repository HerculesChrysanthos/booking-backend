const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    bookingId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Booking', bookingSchema);