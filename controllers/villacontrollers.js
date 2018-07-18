var Villa = require("../models/villa");
var mongoose = require('mongoose');

var villaController = {};


// Lister les villas
villaController.list = function (req, res) {
    Villa.find({}).exec(function (err, villa) {
        if (err) {
            console.log('Error : ', err);
        }else{
            res.render("../views/catalogue/liste",{villa:villa} );
        } 
    });
};


// Renvoit à la page d'ajout d'une villa 
villaController.create = function (req, res) {
    res.render("../views/catalogue/ajouter");
};

// Enregistrer une villa 
villaController.save = function (req, res) {
    var villa = new Villa(req.body);
    villa.save(function (err) {
        if (err) {
            console.log(err);
            res.render("../views/catalogue/ajouter");
        } else {
            console.log("creation villa OK");
            res.redirect("/catalogue");
        }
    });
};




//export du module
module.exports = villaController;