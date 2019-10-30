const express = require('express');
const bookController = require('../Controllers/book');
const Router = express.Router();

// GET users listing.
Router.get('/get', bookController.getAll);
// POST users
Router.post('/post', bookController.post);
// // UPDATE users
Router.put('/update', bookController.putByID);
// DELETE users
Router.delete('/delete', bookController.deleteByID);
module.exports = Router;