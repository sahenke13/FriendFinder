//require your dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up Express 

var app = express();
var port = process.env.PORT || 3000;

//Set up the Express app to handle data

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());













//start the server to begin listening
app.listen(PORT, function(){
    console.log("App is listening " + PORT);
})