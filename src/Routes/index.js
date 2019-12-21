
const express = require ('express');
const book = require ('./bookcollection');
const bookcrud = require ('./book');
const user = require('./users')
const Router = express.Router();
// const verifyToken = require ('../Configs/Auth');

Router.use ('/bookcollection', book);
Router.use ('/book', bookcrud);
Router.use ('/user',user)


module.exports = Router;
