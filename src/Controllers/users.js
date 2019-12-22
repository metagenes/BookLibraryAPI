
const userModel = require('../Models/users');
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const formRes = require ('../Helpers/formRes')

const validateEmail = em => {
	const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return regex.test(em);
};

module.exports = {
	

	loginUser: async (req, res, next) => {
		try {
			const { email, password } = req.body;

			if (email == null || email == undefined) {
				res.status(400).json({ msg: 'Email Cannot Empty' });
			} else if (!validateEmail(email)) {
				res.status(400).json({ msg: 'Email is Invalid' });
			} else if (password == null || password == undefined) {
				res.status(400).json({ msg: 'Password Cannot Empty' });
			} else {
				await userModel
					.loginUser(email)
					.then(response => {
						if (response.length === 0) {
							res.status(400).json({
								message: `User with email ${email} Not Found`,
							});
						} else {
							if (bcrypt.compareSync(password, response[0].password)) {
                            if (password === response[0].password) {
								// const token = jwt.sign(
								jwt.sign({ response: response[0] },
									process.env.SECRET_KEY, (err, token) => {
									if (!err){
										res.status(200).json({token, message:"login success"});
									}
										
									
								});
								// );
								// res.json(token);
								// // console.log({ msg: 'login successful',thistoken });
							} else {
								res.status(400).json({
									message: 'Wrong password or Email',
								});
							}
						}
					}})
					.catch(err => {
						res.json(err);
					});
			}
		} catch (err) {
			next(err);
		}
	},
	registerUser: async (req, res, next) => {
		try {
			const { name, email, password, created_at,updated_at, isAdmin } = req.body;
            const today = new Date;
            const userData = {
				name,
				created_at: today,
				email,
				password,
				updated_at: today,
				isAdmin: "user",
			};

			if (email == null || email == undefined) {
				res.status(400).json({ msg: 'Email is Required' });
			} else if (name == null || name == undefined) {
				res.status(400).json({ msg: 'Name is Required' });
			} else if (!validateEmail(email)) {
				res.status(400).json({ msg: 'Email is Invalid' });
			} else if (password == null || password == undefined) {
				res.status(400).json({ msg: 'Password Cannot Empty' });
			} else if (password.length < 5) {
				res.status(400).json({ msg: 'Password Should be greater than 5' });
			} else {
				await userModel
					.getUserByEmail(email)
					.then(result => {
						if (result.length > 0) {
							res.status(400).json({ msg: 'User Already Exist!' });
						} else {
							bcrypt.hash(password, 10, (err, hash) => {
								userData.password = hash;
								userModel
									.registerUser(userData)
									.then(result => {
										res.json({ msg: 'Registered!' });
									})
									.catch(err => {
										res.json(err);
									});
							});
						}
					})
					.catch(err => {
						res.json(err);
					});
			}
		} catch (err) {
			next(err);
		}
	},
	getWishlist: (req,res) => {
        const user_id = req.query.user_id;
        userModel
        .getWishlist(user_id)
        .then(response => formRes.getWishlist (res, response,200))
        .catch (err => console.log(err));
	},
	postWishlist: (req,res) => {
        const { book_id, user_id } = req.body;
            const dataOrder = {
				book_id,
				user_id,
			};
        userModel
        .postWishlist(dataOrder)
        .then(response => formRes.postWishlist (res, response,200))
        .catch (err => console.log(err));
    },
	getHistory: (req,res) => {
        const user_id = req.query.id;
        userModel
        .getHistory(user_id)
        .then(response => formRes.getHistory (res, response,200))
        .catch (err => console.log(err));
    },

	// @route GET
	// getUserOrder: (req, res, next) => {
	// 	jwt.verify(req.token, process.env.SECRET_KEY, async (err, data) => {
	// 		if (err) {
	// 			res.sendStatus(403);
	// 		} else {
	// 			const { user_id } = data.response;

	// 			let rslt = {};
	// 			let total = {};

	// 			try {
	// 				await userModel
	// 					.getUserCartOrder(user_id)
	// 					.then(async result => {
	// 						if (result.length === 0) {
	// 							res.status(404).json({
	// 								msg: 'Order is empty',
	// 							});
	// 						} else {
	// 							rslt = result;
	// 							await userModel
	// 								.getGrandTotal(user_id)
	// 								.then(grand => {
	// 									if (result.length === 0) {
	// 										res.status(404).json({
	// 											msg: 'Order is empty',
	// 										});
	// 									} else {
	// 										total = grand[0];
	// 									}
	// 								})
	// 								.catch(err => {
	// 									res.json(err);
	// 								});
	// 						}
	// 					})
	// 					.catch(err => {
	// 						res.json(err);
	// 					});

	// 				let finalResult = {
	// 					result: rslt,
	// 					total: total.Grand,
	// 				};
	// 				res.json(finalResult);
	// 			} catch (error) {
	// 				next(err);
	// 			}
	// 		}
	// 	});
	// },
};