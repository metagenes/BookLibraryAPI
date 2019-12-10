const express = require('express');
const userController = require('../Controllers/users');
const verifyToken = require('../Configs/auth');

const Router = express.Router();


// POST LOGIN 
Router.post('/login', userController.loginUser);

// POST register user
Router.post('/register', userController.registerUser);

// GET wishlist
Router.get('/wishlist', userController.getWishlist);

// POST wishlist
Router.post('/wishlist', userController.postWishlist);

// GET history
Router.get('/history', userController.getHistory);
module.exports = Router;