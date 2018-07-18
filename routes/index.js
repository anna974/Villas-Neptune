var express = require('express');
var router = express.Router();
var villa = require("../models/villa");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Villas Neptune' });
});



module.exports = router;
