const express = require('express');
const router = express.Router();

const hotelsController = require('../controllers/hotels');

router.get('/', hotelsController.getHotels);

router.post('/', hotelsController.addHotel);

// router.get('/:hotelId', hotelsController.getHotelById);

// router.patch('/:hotelId', hotelsController.updateHotel);

// router.delete('/:hotelId', hotelsController.deleteHotelById);

module.exports = router;