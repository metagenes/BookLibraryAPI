require("dotenv").config()

const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'remotemysql.com',
	user: 'BdVnpDxf3K',
	password: '3PstTjbiHS',
    database: 'BdVnpDxf3K',
});
module.exports = db;