var express = require('express');
var router = express.Router();

var villa = require("../models/villa");


var express = require('express');
var router = express.Router();
var villa = require("../controllers/villacontroller");


//liste des ateliers
router.get("/", villa.list);

//accéder à la page d'inscription
router.get("/ajout", villa.create);

//Créer un atelier
router.post("/save", villa.save);



//export du module router
module.exports = router;
