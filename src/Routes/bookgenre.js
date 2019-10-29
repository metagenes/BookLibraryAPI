const express = require('express');
const bookgenreController = require('../Controllers/bookgenre');
const Router = express.Router();


Router.get('/', bookgenreController.getByGenre);

module.exports= Router;
