const express = require ('express');
const book = require ('./bookcollection');
const bookcrud = require ('./book');
const Router = express.Router();

Router.use ('/bookcollection', book);
Router.use ('/book', bookcrud);


module.exports = Router;
