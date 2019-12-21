const express = require('express');
const bookcollectionController = require('../Controllers/bookcollection');
const Router = express.Router();
const cors = require("cors")
const app = express()
app.use(cors())

Router.get('/', bookcollectionController.getByStatus);
Router.get('/genre', bookcollectionController.getByGenre);
Router.get('/search', bookcollectionController.searchByGenre);

module.exports= Router;
