const MovieController = require("../controllers/MovieController")
const express = require("express")
const { upload } = require("../middlewares/multer")
const route = express.Router();

const checkAuth = require("../middlewares/checkAuth")

route.get("/list", MovieController.list)
route.get("/view/:id", MovieController.view)
route.get("/search", MovieController.search)

route.post("/create", upload.single("profile"), MovieController.create)
route.delete("/delete/:id", MovieController.delete)
route.put("/update/:id", MovieController.update)


route.post("/practice", MovieController.practice);

module.exports = route