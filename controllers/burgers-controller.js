var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//create a route here to do the update to the database

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        res.status(200).end();
    });
});

//complete this route that starts on 18 and look at cats.js; then the front end has to call this thing! in the app.js file-- make sure that these line up like in cats.js and catsController.js

//need another router for the create-a-burger as a router.post
//this will be similar to the put, but with no :id, then make sure you update it in app.js (that's where the communication comes into play)



module.exports = router;
