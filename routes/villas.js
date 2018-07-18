
var express = require('express');
var router = express.Router();
var villa = require("../controllers/villacontrollers");



//accéder à la page d'ajout
router.get("/ajout", villa.create);

//Créer un modèle
router.post("/save", villa.save);


//export du module router
module.exports = router;
