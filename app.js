var express = require("express");
var app = express();


app.use(express.static('public'));


app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index");
    console.log("home sendo exibida");
});

app.get("/presskit", function(req, res) {
    res.render("presskit");
    // console.log("home sendo exibida");
});

app.get(`*`, function(req, res) {
    res.redirect("/");
});


app.listen(3000);
console.log("porta aberta");