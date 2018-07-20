var express = require('express');
var router = express.Router();
var Villa = require("../models/villa");
var mongoose = require('mongoose');

// var fs = require('fs'),
//     pdf = require('html-pdf'),
//     path = require('path'),
//     ejs = require('ejs');


// var html = fs.readFileSync('/Users/Anna/Desktop/villas_neptune/views/index.ejs', 'utf8');
// var options = { filename: 'catalogue.pdf', format: 'Letter', orientation: 'portrait', type: "pdf" };



/* GET home page. */
router.get('/', function (req, res) {
    Villa.find({}).exec(function (err, villa) {
        if (err) {
            console.log('Error : ', err);
        } else {
            res.render("index", { villa: villa });
        }
    });
    // pdf.create(html, options).toFile(function(err, res) {
    //     if (err) return console.log(err);
    //          console.log(res);
    //     });
    
});




module.exports = router;
