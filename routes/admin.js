
var express = require('express');
var router = express.Router();
var villa = require("../controllers/villacontrollers");


router.get("/", villa.liste);

//accéder à la page d'ajout
router.get("/ajout", villa.create);

//Créer un modèle
router.post("/save", villa.save);

// editer un modèle
router.get("/edit/:id", villa.edit);

// Modifier un modèle 
router.post("/update/:id", villa.update);

// supprimer un modèle
router.get("/remove/:id", villa.remove);



//export du module router
module.exports = router;
