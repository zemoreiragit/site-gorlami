var express = require("express");
var app = express();
var port = process.env.PORT || 8000;

var http = require('http').Server(app);


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


http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});