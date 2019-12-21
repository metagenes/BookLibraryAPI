const express = require('express');
const userController = require('../Controllers/users');
// const verifyToken = require('../Configs/Auth');

const Router = express.Router();
const cors = require("cors")
const app = express()
app.use(cors())

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