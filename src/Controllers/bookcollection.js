const express = require ('express');
const bookcollectionModel = require ('../Models/bookcollection');
const formRes = require ('../Helpers/formRes')
const Router = express.Router();

module.exports = {
    getByStatus: (req,res) => {
        const statuscheck = req.query.genre;
        bookcollectionModel
        .getByStatus(statuscheck)
        .then(response => formRes.getByStatus (res, response,200))
        .catch (err => console.log(err));
    },
    getByGenre: (req,res) => {
        const statuscheck = req.query.genre;
        bookcollectionModel
        .getByGenre(statuscheck)
        .then(response => formRes.getByGenre (res, response,200))
        .catch (err => console.log(err));
    },
    searchByGenre: (req,res) => {
        const statuscheck = req.query.search;
        bookcollectionModel
        .searchByGenre(statuscheck)
        .then(response => formRes.searchByGenre (res, response,200))
        .catch (err => console.log(err));
    },
};
