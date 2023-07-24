const {book} = require("../models");

class BookController {
    static getBook(req, res) {
        book.findAll({
            order: [["id" , "asc"]]
        })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    static addBook(req, res) {
        const {title, author, year, publisher, image} = req.body;
        book.create({
            title,
            author,
            year,
            publisher,
            image,
        })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    static removeBook(req, res) {
        const id = +req.params.id;
        book.destroy({
            where: {id},
        })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    static updateBook(req, res) {
        const id = +req.params.id;
        const {title, author, year, publisher, image} = req.body;
        book.update(
            {
                title,
                author,
                year,
                publisher,
                image,
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
    static detailBook(req, res) {
        const id = +req.params.id;
        book.findByPk(id)
        .then((result) => {
            result
                ? res.send(result)
                : res.send({
                    message: `Book with id ${id} is not found.`
                });
        })
        .catch((err) => {
            res.send(err);
        })
    }
}

module.exports = BookController;