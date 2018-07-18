var Villa = require("../models/villa");
var mongoose = require('mongoose');

var villaController = {};



// Renvoit à la page d'ajout d'une villa 
villaController.create = function (req, res) {
    res.render("../views/admin/ajouter");
};

// Enregistrer une villa 
villaController.save = function (req, res) {
    var villa = new Villa(req.body);
    villa.save(function (err) {
        if (err) {
            console.log(err);
            res.render("../views/admin/ajouter");
        } else {
            console.log("creation villa OK");
            res.redirect("/admin");
        }
    });
};




//export du module
module.exports = villaController;