const express = require('express');
const bookController = require('../Controllers/book');
const Router = express.Router();
const cors = require("cors")
const app = express()
app.use(cors())
// const verifyToken = require ('../Configs/Auth');
// GET  listing.
Router.get('/', bookController.getAll);
// POST 
Router.post('/', bookController.post);
// // UPDATE 
Router.put('/', bookController.putByID);
// DELETE 
Router.delete('/', bookController.deleteByID);
// POST borrow
Router.post('/borrow', bookController.orderBook);
// Return book
Router.put('/return', bookController.returnBook);
//search
Router.get('/search',bookController.searchBook);
module.exports = Router;


// localhost:8000/book/order