
var express = require('express');
var router = express.Router();
var villa = require("../controllers/villacontrollers");


router.get("/", villa.liste);
// router.get("/pdf", villa.convertpdf);

//accéder à la page d'ajout
router.get("/ajout", villa.create);

//Créer un modèle
router.post("/save", villa.save);

// editer un atelier
router.get("/edit/:id", villa.edit);

// Modifier un atelier  /!\ cest un POST 
router.post("/update/:id", villa.update);

// supprimer un atelier
router.get("/remove/:id", villa.remove);



//export du module router
module.exports = router;
