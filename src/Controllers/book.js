const express = require ('express');
const bookModel = require ('../Models/book');
const formRes = require ('../Helpers/formRes')
const Router = express.Router();

module.exports = {
    getAll: (req,res) => {
        const id = req.query.genre;
        bookModel
        .getAll(id)
        .then(response => formRes.getAll (res, response,200))
        .catch (err => console.log(err));
    },
    post: (req,res) => {
         const body = {
              ...req.body
         };
        bookModel
        .post(body)
        .then(response => formRes.post (res, response,200))
        .catch (err => console.log(err));
    },
    deleteByID: (req,res) => {
        const deletecheck = req.query.id;
        bookModel
        .deleteByID(deletecheck)
        .then(response => formRes.delete (res, response,200))
        .catch (err => console.log(err));
    },
    putByID: (req,res) => {
        const id = req.query.id;
          const body = {
              ...req.body,
        };
        bookModel
        .putByID(body,id)
        .then(response => formRes.put (res, response,200))
        .catch (err => console.log(err));
    },
};
