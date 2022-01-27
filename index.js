const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

const d = new Date();

let year = d.getFullYear();

console.log(year);


app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
res.render("home", {year: year});
})

app.get("/blog", function(req, res){
res.render("blog", {year: year});
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
