var express = require("express");
const burger = require("../models/burger.js");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});







module.exports = router;
