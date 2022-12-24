const mongoose = require('mongoose');

const Hotel = require('../models/hotel');

exports.getHotels = (req, res, next) => {

};

exports.addHotel = (req, res, next) => {
	const hotel = new Hotel({
		hotelId: new mongoose.Types.ObjectId(),
		adminId: req.body.adminId,
		name: req.body.name,
		address: req.body.address,
		rooms: []
	});

	hotel
		.save()
		.then(result => {
			res.status(201).json({ message: result });
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
};

// exports.getHotelById = (req, res, next) => {

// };

// exports.updateHotel = (req, res, next) => {

// };

// exports.deleteHotelById = (req, res, next) => {

// };