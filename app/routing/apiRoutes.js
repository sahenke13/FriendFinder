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
});




app.post("/api/friends", function(req, res){
    
    //Bring in UserInput Values from form.

    const userInput = req.body;
    console.log("Your name is : " + userInput.name);
    console.log("Your scores are : " + userInput.scores);

    //initialize a few variables
    var bestMatch = "";
    var diff = 0;
    var totalFriendDiff;
    var minDiff = 1000;


    for(let i in Friends){

        console.log("\nFriends name is: " +Friends[i].name );
        console.log("Your name is : " + userInput.name);
        

        for(let j in Friends[i].scores){

            console.log("Friends scores are: " + Friends[i].scores[j] );
            console.log("Your Scores are: " + userInput.scores[j]);

            diff += Math.abs(parseInt(Friends[i].scores[j]) - parseInt(userInput.scores[j]));
            console.log("diff is: "+ diff);
                if(diff <= minDiff){
                    minDiff = diff;
                    bestMatch = Friends[i];
                    bestName = Friends[i].name;
                    bestPhoto = Friends[i].photo;
                }
        }
        console.log("Total diff is: " + diff)
        console.log("BestMatch is :"+ bestMatch.name);
        diff = 0;
        

    }

    //Push UserInput into Friends Array 
    Friends.push(userInput);
    res.json(bestMatch)

});
};