const userRepository = require('../repositories/user.repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

async function registerUser(req, res, next) {
	try {
		const user = req.body;

		// thelei service 

		const encryptedPassword = await bcrypt.hash(user.password, 10);
		user.password = encryptedPassword;

		const response = await userRepository.registerUser(user);

		// prepei na doume ti tha gurnaei sto reponse gt twra gurnaei oti gurizei h mongo KAI PASSWORD

		res.status(201).json(response);
		console.log(`SUCCESSFUL_USER_CREATED ${response}`)
	} catch (error) {
		
		console.log(`error: ${error}`)
		if(error.toString().includes('duplicate key')) {
			return res.status(409).json({
				message: 'email already exists'
			})
		}

		// res.status(500).json({
		// 	error
		// });

		next(error) //for unhandled error, goes on app.js 
	}
}

async function loginUser(req, res, next) {
	try {
		const email = req.body.email;
		const password = req.body.password;
		const user = await userRepository.findUser(email);


		console.log(user);
		if (user && (await bcrypt.compare(password, user.password))) {
			console.log(`${process.env.TOKEN_KEY}`)
			const token = jwt.sign(
			  { 'user._id': user._id, email },
			  process.env.TOKEN_KEY,
			  {
				expiresIn: "2h",
			  }
			);
	  
			  // thelume na ta krataei se ena array, kai na mhn kanei compare alla na vlepei ti uparxei sth vash ?
			  // store token to db
			
			return res.status(200).json({
				token
			});
		}
		return res.status(401).json({
			message: 'Auth failed.'
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// exports.registerUser = (req, res, next) => {
// 	const user = new User({
// 		userId: new mongoose.Types.ObjectId(),
// 		name: req.body.name,
// 		surname: req.body.surname,
// 		email: req.body.email,
// 		password: req.body.password,
// 		isAdmin: req.body.isAdmin
// 	});
	
// 	user
// 		.save()
// 		.then(result => {
// 			const response = {
// 				id: result.id,
// 				name: result.name,
// 				surname: result.surname,
// 				email: result.email,
// 				isAdmin: result.isAdming
// 			};
// 			res.status(201).json(response);
// 		})
// 		.catch(err => {
// 			if ('email' in err.keyPattern) {
        
// 				res.status(409).json({
// 					message: 'Mail already exists.'
// 				});
// 			} else {
// 				res.status(500).json({
// 					error: err
// 				});
// 			}
// 		});
// };

module.exports = {
	registerUser,
	loginUser,
}