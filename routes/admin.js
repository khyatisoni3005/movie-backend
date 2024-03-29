const express = require("express")
const route = express.Router();

const AdminController = require("../controllers/AdminController")

route.post("/sign-up", AdminController.signUp)
route.post("/login", AdminController.login)

module.exports = route
