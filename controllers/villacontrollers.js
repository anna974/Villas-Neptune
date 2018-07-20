var Villa = require("../models/villa");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var villaController = {};

// var fs = require('fs');
// var pdf = require('html-pdf');
// var html = res.render('index', 'utf8');
// var options = { format: 'Letter' };

// villaController.convertpdf = function (req, res) {
//     pdf.create(html, options).toFile('./catalogue.pdf', function (err, res) {
//         if (err) return console.log(err);
//         console.log(res);
//     });
// };



// Liste des modèles
villaController.liste = function (req, res) {
    Villa.find({}).exec(function (err, villa) {
        if (err) {
            console.log('Error : ', err);
        } else {
            res.render("../views/admin/liste", { villa: villa });
        }
    });
};


// Renvoit à la page d'ajout d'un modèle
villaController.create = function (req, res) {
    res.render("../views/admin/ajouter");
};

// Enregistrer un modèle 
villaController.save = function (req, res) {
    var villa = new Villa(req.body);
    if (req.body.suite_parentale == "on") {
        villa.suite_parentale = true;
    } else {
        villa.suite_parentale = false;
    };
    console.log(req.body);
    villa.save(function (err) {
        if (err) {
            console.log(err);
            res.render("../views/admin/ajouter");
        } else {
            console.log("creation villa OK");
            console.log(villa);
            res.redirect("/admin");
        }
    });
};

//edition d'un modèle par son id 

villaController.edit = function (req, res) {
    var villa = new Villa(req.body);

    Villa.findOne({ _id: req.params.id }).exec(function (err, villa) {
        if (err) {
            console.log("Error ", err);
        } else {
            res.render("../views/admin/modifier", { villa: villa });
        }
    });
};

//   Modifier un modèle
villaController.update = function (req, res) {
    if (req.body.suite_parentale == undefined) {
        req.body.suite_parentale = false;
    } else {
        req.body.suite_parentale = true;
    }
    Villa.findByIdAndUpdate(req.params.id, { $set: { nom_modele: req.body.nom_modele, photo_pers: req.body.photo_pers, photo_rdc: req.body.photo_rdc, photo_etage: req.body.photo_etage, nb_pieces: req.body.nb_pieces, nb_chambres: req.body.nb_chambres, suite_parentale: req.body.suite_parentale, prix: req.body.prix, shon: req.body.shon, shob: req.body.shob, surface_cuisine: req.body.surface_cuisine, surface_sejour: req.body.surface_sejour, surface_rangement: req.body.surface_rangement, surface_cellier: req.body.surface_cellier, surface_wc: req.body.surface_wc, surface_suiteparentale: req.body.surface_suiteparentale, surface_chambre1: req.body.surface_chambre1, surface_chambre2: req.body.surface_chambre2, surface_chambre3: req.body.surface_chambre3, surface_salledebains: req.body.surface_salledebains, surface_habitable_rdc: req.body.surface_habitable_rdc, surface_habitable_etage: req.body.surface_habitable_etage, surface_varangue: req.body.surface_varangue } }, { new: true }, function (err, villa) {

        if (err) {
            console.log(err);
            res.render("../views/admin/modifier", { villa: req.body });
        }
        res.redirect("/admin");

    });
};

//suppression d'un modèle 
villaController.remove = function (req, res) {
    Villa.findByIdAndRemove(req.params.id, function (err, villa) {

        if (err) {
            console.log(err);

        }
        res.redirect("/admin");

    });
};


//export du module
module.exports = villaController;