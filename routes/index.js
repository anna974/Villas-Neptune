var express = require('express');
var router = express.Router();
var villa = require("../models/villa");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Villas Neptune' });
});


router.get('/catalogue', function (req, res) {
  villa.find({}).exec(function (err, villa) {
    if (err) {
      console.log('Error : ', err);
    } else {
      console.log("->", villa);
      res.render("catalogue", { villa: villa });
    }
  });
})


module.exports = router;
