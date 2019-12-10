const express = require('express');
const bookcollectionController = require('../Controllers/bookcollection');
const Router = express.Router();

Router.get('/', bookcollectionController.getByStatus);
Router.get('/genre', bookcollectionController.getByGenre);
Router.get('/search', bookcollectionController.searchByGenre);

module.exports= Router;
