//require your dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up Express 

var app = express();
var PORT = process.env.PORT || 3000;

//Set up the Express app to handle data

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



require(path.join(__dirname,'./app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes.js'))(app);



//start the server to begin listening
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });