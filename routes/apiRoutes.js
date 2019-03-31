let possibleFriends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        screen.json(possibleFriends);
    });
    app.post("/api/post", function(req, res){
        //if (possibleFriends.length )
    })
}