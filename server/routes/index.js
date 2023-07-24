const {Router} = require("express");
const route = Router();

route.get("/api/" , (req, res) => {
    res.json({
        message: "Home page",
    });
});

const userRoutes = require("./Users");
const bookRoutes = require("./Books");
const borrowRoutes = require("./Borrow");

route.use("/api/users", userRoutes);
route.use("/api/books", bookRoutes);
// route.use("/borrow", borrowRoutes);

module.exports = route;