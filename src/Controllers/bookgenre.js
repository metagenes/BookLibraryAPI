const express = require ('express');
const bookgenreModel = require ('../Models/bookgenre');
const formRes = require ('../Helpers/formRes')
const Router = express.Router();

module.exports = {
    getByGenre: (req,res) => {
        const statuscheck = req.query.genre;
        bookgenreModel
        .getByGenre(statuscheck)
        .then(response => formRes.getByGenre (res, response,200))
        .catch (err => console.log(err));
    },
};
