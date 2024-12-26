const express = require("express");
const port = 1008;

const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log("Server Started on Port : " + port);
})