
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Need to bring in friends.js for logic
var Friends = require('../data/friends');


module.exports= function(app){


app.get("/api/friends",function(req, res){
    res.json(Friends)
});


app.post("/api/friends", function(req, res){
    

    const userInput = req.body;
    console.log("Your name is : " + userInput.name);
    console.log("Your scores are : " + userInput.scores);

    //initialize a few variables
    var bestMatch = "";
    var diff = 0;
    var minDiff = 1000;


    for(let i in Friends){

        for(let j in Friends[i].scores){

            diff += Math.abs(parseInt(Friends[i].scores[j]) - parseInt(userInput.scores[j]));
    
        }
    
            if(diff < minDiff){

                    minDiff = diff;
                    bestMatch = Friends[i];
                    bestName = Friends[i].name;
                    bestPhoto = Friends[i].photo;
                }
        
        diff = 0;
        
    }

    Friends.push(userInput);
    res.json(bestMatch)

});
};