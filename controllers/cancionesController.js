let db = require("../database/models");

let cancionesController = {
    listar: function(req, res){

        let pedidoCanciones = db.Canciones.findAll({
            include: [{association: "generos"}, {association: "artistas"}, {association: "albumes"}]
        });
        let pedidoGeneros = db.Generos.findAll();

        Promise.all([pedidoCanciones, pedidoGeneros])
            .then(function([canciones, generos]){

            res.render("listadoCanciones", {canciones: canciones, generos: generos})
             })
    },
    crear: function(req, res){
        let pedidoCanciones = db.Canciones.findAll({
            include: [{association: "generos"}, {association: "artistas"}, {association: "albumes"}, {association: "artistas"}]
        });
        let pedidoGeneros = db.Generos.findAll();
        let pedidoAlbumes = db.Albumes.findAll();
        let pedidoArtistas = db.Artistas.findAll();

        Promise.all([pedidoCanciones, pedidoGeneros, pedidoAlbumes, pedidoArtistas])
            .then(function([canciones, generos, albumes, artistas]){

            res.render("crearCanciones", {canciones: canciones, generos: generos, albumes: albumes, artistas: artistas})
             })
    },
    guardar: function(req, res){
        db.Canciones.create({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            created_at: req.body.creacion,
            updated_at: req.body.lanzamiento,
            genero_id: req.body.genero,
            album_id: req.body.idAlbum,
            artista_id: req.body.idArtista
        })
        .then(function(){
        return res.redirect("/canciones/listar")
        })
    },
     editar:function(req, res){
        let pedidoCanciones = db.Canciones.findByPk(req.params.id, {
            include: [{association: "generos"}, {association: "artistas"}, {association: "albumes"}]
        });
        let pedidoGeneros = db.Generos.findAll();

        Promise.all([pedidoCanciones, pedidoGeneros])
            .then(function([canciones, generos]){
            res.render("editarCanciones", {canciones: canciones, generos: generos})
             })
     },

     actualizar: function(req, res){
         db.Canciones.update({
             titulo: req.body.titulo,
             duracion: req.body.duracion,
             genero_id: req.body.genero,
             album_id: req.body.idAlbum,
             artista_id: req.body.idArtista
            },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(() =>{
                return res.redirect("/canciones/detalle/" + req.params.id)
                console.log(body)
            })
            .catch(error => res.send(error))
        },

        detalle: function(req, res){
            db.Canciones.findByPk(req.params.id, {
                include: [{association: "generos"}, {association: "artistas"}, {association: "albumes"}]
            })
            .then(function(canciones){
                res.render("detalleCanciones", {canciones: canciones})
            })
        },
    borrar: function(req, res){
        db.Canciones.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/canciones/listar")
    }
}

module.exports = cancionesController;