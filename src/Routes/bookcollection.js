const express = require('express');
const bookcollectionController = require('../Controllers/bookcollection');
const Router = express.Router();

Router.get('/', bookcollectionController.getByStatus);


module.exports= Router;
