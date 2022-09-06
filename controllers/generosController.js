let db = require("../database/models");

let generosController = {

    generos: function(req, res){
        db.Generos.findAll()
        .then(function(generos){
            res.render("generoCanciones", {generos: generos})
        })
    },
}

module.exports = generosController;