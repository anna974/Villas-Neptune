var express = require('express');
var router = express.Router();
var Villa = require("../models/villa");
var mongoose = require('mongoose');
var fs = require('fs');
var pdf = require('html-pdf');





/* GET home page. */
router.get('/', function (req, res) {
    Villa.find({}).exec(function (err, villa) {
        if (err) {
            console.log('Error : ', err);
        } else {
            res.render("index", { villa: villa });
        }
    });
});



module.exports = router;
