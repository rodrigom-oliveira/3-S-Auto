const express = require("express")
const app = express()
const port = 3000
const path = require("path");
const userRoutes = require("./routes/userRoutes")


app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs")

app.use("/", userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})