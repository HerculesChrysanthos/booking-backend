const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoute = require('./api/routes/user.route');
const roomRoute = require('./api/routes/rooms');
const hotelRoute = require('./api/routes/hotels');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
	'mongodb+srv://tsio:' + 
    process.env.MONGO_ATLAS_PASS + 
    '@cluster0.xywmu.mongodb.net/booking?retryWrites=true&w=majority',
	{
		useNewUrlParser: true, 
		useUnifiedTopology: true 
	}
);

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Tpe, Accept, Authorization'
	);
	if(req.method === 'OPTIONS'){
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json();
	}
	next();
});

app.use('/users', userRoute);
app.use('/rooms', roomRoute);
app.use('/hotels', hotelRoute);

app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

module.exports = app;