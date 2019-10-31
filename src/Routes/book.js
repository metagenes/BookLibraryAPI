const express = require('express');
const bookController = require('../Controllers/book');
const Router = express.Router();

// GET users listing.
Router.get('/', bookController.getAll);
// POST users
Router.post('/', bookController.post);
// // UPDATE users
Router.put('/', bookController.putByID);
// DELETE users
Router.delete('/', bookController.deleteByID);
module.exports = Router;