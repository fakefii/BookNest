const {Router} = require('express');
const userRoute = Router();
const {UserController} = require("../controllers");

userRoute.get("/", UserController.getUser);
userRoute.post("/register", UserController.addUser);
userRoute.post("/delete/:id", UserController. removeUser);
userRoute.post("/update/:id", UserController.updateUser);
userRoute.get("/details/:id", UserController.detailUser);

module.exports = userRoute;