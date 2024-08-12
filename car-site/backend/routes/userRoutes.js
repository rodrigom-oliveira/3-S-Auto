const express = require("express")
const userRoutes = express.Router()

userRoutes.get("/", (req, res) => {
	res.render("user/index")
})

userRoutes.get("/cars", (req, res) => {
	res.render("user/cars")
})

userRoutes.get("/about", (req, res) => {
	res.render("user/about")
})

userRoutes.get("/contacts", (req, res) => {
	res.render("user/contacts")
})


module.exports = userRoutes