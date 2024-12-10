const express = require("express");
const port = 1008;

const app = express()

let Students = []

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.post("/addData", (req, res) => {
    req.body.id = String(Date.now());
    Students.push(req.body);
    res.redirect("/");
})

app.get("/deleteData", (req, res) => {
    let deleteRecord = Students.filter((e) => e.id !== req.query.id);
    Students = deleteRecord;
    res.redirect("/");
})

app.get("/", (req, res) => {
    res.render("index", { Students })
});

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started on Port : " + port);

})