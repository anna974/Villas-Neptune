var express = require('express');
var router = express.Router();
var villa = require("../models/villa");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Villas Neptune' });
});


router.get('/catalogue', function (req, res) {
      res.render("catalogue");
    }
)


module.exports = router;
