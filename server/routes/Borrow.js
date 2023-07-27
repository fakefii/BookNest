const {Router} = require('express');
const borrowRoute = Router();
const {BorrowedBookController} = require("../controllers");

borrowRoute.get("/", BorrowedBookController.getBorrowedBook);
borrowRoute.post("/add", BorrowedBookController.addBorrowedBook);
borrowRoute.post("/delete/:id", BorrowedBookController. removeBorrowedBook);
borrowRoute.post("/update/:id", BorrowedBookController.updateBorrowedBook);
borrowRoute.get("/details/:id", BorrowedBookController.detailBorrowedBook);

module.exports = borrowRoute;