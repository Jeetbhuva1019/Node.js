const express = require("express");
const port = 1008;

const app = express()

let student = [
    {"id":"1",name:"Sahil",subject:"ReactJS"},
    {"id":"2",name:"Rahil",subject:"NodeJs"},
    {"id":"3",name:"Yash",subject:"NextJS"},
    {"id":"1",name:"Prince",subject:"ReactJS"}
]

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index",{student})
});

app.listen(port, (err) => {
    err?console.log(err):console.log("Server Started on Port : " + port);

})