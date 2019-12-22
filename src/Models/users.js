const db = require('../Configs/db');
// const allQuery = require('../Helpers/query');

module.exports = {
	// @route POST
	loginUser: email => {
		return new Promise((resolve, reject) => {
			// const query = `SELECT * FROM user WHERE email = ?  `;

			// db.query(query, [email], (err, result) => {
			// 	if (!err) {
			// 		resolve(result);
			// 	} else {
			// 		reject(err);
			// 	}
			db.query(
				`SELECT * FROM user WHERE email = ?`,
				[email],
				(err, response) => {
					if (!err) {
						resolve (response);
					} else {
						reject (err);
					}
				}
			);
			});
		// });
	},
	// @route POST
	getUserByEmail: email => {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM user WHERE email = ? `;

			db.query(query, [email], (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(err);
				}
			});
		});
	},
	// @route POST
	registerUser: body => {
		return new Promise((resolve, reject) => {
			const query = `INSERT INTO user SET ? `;

			db.query(query, [body], (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(err);
				}
			});
		});
	},
	getWishlist: user_id => {
        return new Promise ((resolve, reject) => {
            db.query(
				'select U.name,B.* from user U join wishlist W on U.user_id=W.user_id JOIN bookcollection B ON B.book_id=W.book_id WHERE U.user_id=?',
				[user_id],
                (err, response) => {
                    if (!err) {
                        resolve (response);
                    } else {
                        reject (err);
                    }
                }
            );
        });
	},
	postWishlist: (dataOrder) => {
		return new Promise ((resolve, reject) => {
			db.query(
				`INSERT into wishlist SET ?`,
				[dataOrder],
				(err, response) => {
					if (!err) {
						resolve (response);
					} else {
						reject (err);
					}
				}
			);
		});
	},
	getHistory: user_id => {
        return new Promise ((resolve, reject) => {
            db.query(
                'select U.name,B.*,T.book_at, T.return_at from user U join transaction T on U.user_id=T.user_id JOIN bookcollection B ON B.book_id=T.book_id WHERE U.user_id = ?',
               [user_id],
                (err, response) => {
                    if (!err) {
                        resolve (response);
                    } else {
                        reject (err);
                    }
                }
            );
        });
    },
	// @route GET
	// getUserCartOrder: id => {
	// 	return new Promise((resolve, reject) => {
	// 		const query = allQuery.getUserCartOrder;
	// 		db.query(query, [id], (err, result) => {
	// 			if (!err) {
	// 				resolve(result);
	// 			} else {
	// 				reject(err);
	// 			}
	// 		});
	// 	});
	// },
	// getGrandTotal: id => {
	// 	return new Promise((resolve, reject) => {
	// 		const query = allQuery.grandTotalOrder;
	// 		db.query(query, [id], (err, result) => {
	// 			if (!err) {
	// 				resolve(result);
	// 			} else {
	// 				reject(err);
	// 			}
	// 		});
	// 	});
	// },
};