const {BorrowedBook, user, book} = require("../models");

class BorrowedBookController {
    static getBorrowedBook(req, res) {
        BorrowedBook.findAll({
            order: [["id" , "asc"]],
            include: [user, book],
        })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    static addBorrowedBook(req, res) {
        const {borrowDate, returnDate, status, userId, bookId} = req.body;
        BorrowedBook.create({
            borrowDate,
            returnDate,
            status,
            userId,
            bookId,
        })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    static removeBorrowedBook(req, res) {
        const id = +req.params.id;
        BorrowedBook.destroy({
            where: {id},
        })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    static updateBorrowedBook(req, res) {
        const id = +req.params.id;
        const {borrowDate, returnDate, status, userId, bookId} = req.body;
        BorrowedBook.update(
            {
                borrowDate,
                returnDate,
                status,
                userId,
                bookId,
            },
            {
                where: {id},
            }
            )
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    static detailBorrowedBook(req, res) {
        const id = +req.params.id;
        borrowedBook.findByPk(id)
        .then((result) => {
            result
                ? res.send(result)
                : res.send({
                    message: `Borrow Book with id ${id} is not found.`
                });
        })
        .catch((err) => {
            res.send(err);
        })
    }
}

module.exports = BorrowedBookController;