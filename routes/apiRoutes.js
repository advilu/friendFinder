const possibleFriends = require("../data/friends.js");
const path = require("path")
const router = require('express').Router()

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsData)
    });
    app.post("/api/friends", function(req, res){
        friendsData.push(req.body);

        
    });
};