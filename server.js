//require your dependencies

var express = require("express");
var bodyParser = require("body-parser");


//Set up Express 

var app = express();
var PORT = process.env.PORT || 3000;

//Set up the Express app to handle data

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//comment here

let apiRoutes = require('./app/routing/apiRoutes.js');
let htmlRoutes = require('./app/routing/htmlRoutes.js');

apiRoutes(app);
htmlRoutes(app);



//start the server to begin listening
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });