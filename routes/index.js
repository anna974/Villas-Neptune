var express = require('express');
var router = express.Router();

var villa = require("../models/villa");


/* GET home page. */
router.get('/', function (req, res) {
  villa.find({}).exec(function (err, villa) {
    if (err) {
      console.log('Error : ', err);
    } else {
      console.log("->", villa);
      res.render("../views/villas/index", { villa: villa });
    }
  });
})


module.exports = router;
