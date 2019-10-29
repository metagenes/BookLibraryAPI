const express = require ('express');
const book = require ('./bookcollection');
const bookgenre = require ('./bookgenre');
const bookcrud = require ('./book');
const Router = express.Router();

Router.use ('/bookcollection', book);
Router.use ('/bookgenre', bookgenre);
Router.use ('/book', bookcrud);


module.exports = Router;
