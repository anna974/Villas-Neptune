var mongoose = require('mongoose');

var VillaSchema = new mongoose.Schema({
    nom_modele: String,
    photo_pers: String,
    photo_rdc: String,
    photo_etage: String,
    nb_pieces: Number,
    nb_chambres: Number,
    suite_parentale: Boolean,
    prix: Number,
    shon: Number,
    shob: Number,
    surface_cuisine:Number,
    surface_sejour: Number,
    surface_rangement: Number,
    surface_cellier: Number,
    surface_wc: Number,
    surface_suiteparentale: Number,
    surface_chambre1: Number,
    surface_chambre2: Number,
    surface_chambre3: Number,
    surface_salledebains: Number,
    surface_habitable_rdc: Number,
    surface_habitable_etage: Number,
    surface_varangue: Number
});

module.exports = mongoose.model("Villa", VillaSchema);