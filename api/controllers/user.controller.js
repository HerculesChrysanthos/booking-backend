const userRepository = require('../repositories/user.repository');

async function registerUser(req, res, next) {
	try {
		const user = req.body;
		const response = await userRepository.registerUser(user);

		// prepei na doume ti tha gurnaei sto reponse gt twra gurnaei oti gurizei h mongo

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
}