const {user} = require("../models");

class UserController {
    static getUser(req, res) {
        user.findAll({
            order: [["id" , "asc"]]
        })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    static addUser(req, res) {
        const {username, name, address, email, password} = req.body;
        user.create({
            username,
            name,
            address,
            email,
            password,
        })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    static removeUser(req, res) {
        const id = +req.params.id;
        user.destroy({
            where: {id},
        })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    static updateUser(req, res) {
        const id = +req.params.id;
        const {username, name, address, email, password} = req.body;
        user.update(
            {
                username,
                name,
                address,
                email,
                password,
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
    static detailUser(req, res) {
        const id = +req.params.id;
        user.findByPk(id)
        .then((result) => {
            result
                ? res.send(result)
                : res.send({
                    message: `User with id ${id} is not found.`
                });
        })
        .catch((err) => {
            res.send(err);
        })
    }
}

module.exports = UserController;