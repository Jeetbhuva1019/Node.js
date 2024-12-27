const express = require("express");
const port = 1008;
const schema = require("./model/firstschema");
const db = require("./config/db");

const app = express();


app.set("view engine", "ejs");
app.use(express.urlencoded());

app.get("/", async (req, res) => {
    let data = await schema.find({});
    res.render("index", { data });
})

app.post("/addData", async (req, res) => {
    await schema.create(req.body)
        .then(data => {
            res.redirect("/");
        })
})

app.get("/editData/", async (req, res) => {
    let singleData = await schema.findById(req.query.id);
    res.render("edit", { singleData });
})

app.get("/deleteData", async (req, res) => {
    await schema.findByIdAndDelete(req.query.id)
        .then((data) => {
            res.redirect("/");
        })
})

app.post("/updateData", async (req, res) => {
    await schema.findByIdAndUpdate(req.body.id, req.body)
        .then((data) => {
            res.redirect("/");
        })
})


app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started On Port : " + port);
})