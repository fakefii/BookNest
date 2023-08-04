const {Router} = require("express");
const route = Router();

const localhost = `api`;

route.get(`${localhost}` , (req, res) => {
    res.status(200).json({
        message: "Home page",
    });
});

const userRoutes = require("./Users");
const bookRoutes = require("./Books");
const borrowRoutes = require("./Borrow");

route.use("/users", userRoutes);
route.use("/books", bookRoutes);
route.use("/borrow", borrowRoutes);

module.exports = route;