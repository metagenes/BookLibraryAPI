const express = require ('express');
const bookModel = require ('../Models/book');
const formRes = require ('../Helpers/formRes')
const Router = express.Router();

module.exports = {
    // getAll: (req,res) => {
    //     const id = req.query.genre;
    //     bookModel
    //     .getAll(id)
    //     .then(response => formRes.getAll (res, response,200))
    //     .catch (err => console.log(err));
    // },
    orderBook: (req,res) => {
        const { book_id, user_id, book_at } = req.body;
            const today = new Date;
            const dataOrder = {
				book_id,
				book_at: today,
				user_id,
			};
        bookModel
        .orderBook(dataOrder)
        .then(response => formRes.orderBook (res, response,200))
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
    returnBook: (req,res) => {
        const { book_id, user_id, return_at } = req.body;
            const today = new Date;
            const dataReturn = {
				return_at: today,
			};
        bookModel
        .returnBook(dataReturn,book_id,user_id)
        .then(response => formRes.put (res, response,200))
        .catch (err => console.log(err));
    },
    searchBook: (req,res) => {
        const statuscheck = req.query.search;
        bookModel
        .searchBook(statuscheck)
        .then(response => formRes.searchBook (res, response,200))
        .catch (err => console.log(err));
    },
};
