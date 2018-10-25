//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Need to bring in friends.js for logic
var Friends = require('../data/friends');


//Will need to export the app.get/post functions to server.js

module.exports= function(app){


app.get("/api/friends",function(req, res){
    
    console.log("\nYou are in the /api/friends file path\n")
    console.log("++++++++++++++++++++++++++++++++++")
    res.json(Friends)
    // console.log("\nyour req.body is: " + res.json(Friends))

    

});




app.post("/api/friends", function(req, res){
    console.log("\nThis is your api friends folder")
    const userInput = req.body;
    
    console.log("Your req.body is here: " + userInput)
    var newFriend = JSON.stringify(req.body);
    console.log(newFriend);

    Friends.push(userInput);
    

});
};