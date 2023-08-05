const {Router} = require('express');
const bookRoute = Router();
const {BookController} = require("../controllers");

bookRoute.get("/", BookController.getBook);
bookRoute.post("/add", BookController.addBook);
bookRoute.delete("/:id", BookController. removeBook);
bookRoute.put("/update/:id", BookController.updateBook);
bookRoute.get("/detail/:id", BookController.detailBook);

module.exports = bookRoute;