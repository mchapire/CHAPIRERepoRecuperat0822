let db = require("../database/models");

let cancionesController = {
    listar: function(req, res){
        db.Canciones.findAll()
        .then(function(canciones){
            return res.render("listadoCanciones", {canciones: canciones})
        })
    },
    crear: function(req, res){
        db.Generos.findAll()
        .then(function(generos){
            return res.render("crearCanciones", {generos: generos})
        })
    },
    guardar: function(req, res){
        db.Canciones.create({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            created_at: req.body.fechaCreacion,
            updated_at: req.body.fechaLanzamiento,
            genero_id: req.body.genero,
            album_id: req.body.idAlbum,
            artista_id: req.body.idArtista
        });
        res.redirect("/canciones/crear")
    },

}

module.exports = cancionesController;