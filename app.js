require ('dotenv').config();
const express = require ('express');
const logger = require ('morgan');
const bodyParser = require ('body-parser');
const router = require ('./src/Routes/index');
const app = express();
const cors = require('cors');
serverPORT = 3306
const PORT = process.env.PORT || serverPORT

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
  })

app.use (cors());
app.use (logger('dev'));
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended: false}));

app.use ('/',router);

module.exports = app;