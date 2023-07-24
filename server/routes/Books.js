const {Router} = require('express');
const bookRoute = Router();
const {BookController} = require("../controllers");

bookRoute.get("/", BookController.getBook);
bookRoute.post("/add", BookController.addBook);
bookRoute.post("/delete/:id", BookController. removeBook);
bookRoute.post("/update/:id", BookController.updateBook);
bookRoute.get("/details/:id", BookController.detailBook);

module.exports = bookRoute;