// const mysql = require ('mysql');

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
// });

// db.connect(err =>{
//     if (err) {throw err} else {console.log('database is connected')}
// });

// module.exports = db;

require("dotenv").config()

const mysql = require("mysql")

const db = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});
module.exports = db