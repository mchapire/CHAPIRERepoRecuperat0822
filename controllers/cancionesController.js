let db = require("../database/models");
const { Op } = require("sequelize");

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
        db.Generos.findAll()
            .then(function(generos){
            res.render("crearCanciones", {generos: generos})
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
    },
    search: (req, res) => { 
        let search = req.query.keywords;
        let cancionesSearch = db.Canciones.findAll({
            include: [{association: "generos"}, {association: "artistas"}, {association: "albumes"}],
            where: {
                tags: { [Op.like]: '%' + req.query.keywords + '%' },
                   }
                })
        .then((cancionesSearch) => {
                return res.render('resultadoBusqueda', { 
                    cancionesSearch, 
                    search
                }
            )
        })
    }
    // let pedidoCanciones = db.Canciones.findAll({
    //     include: [{association: "generos"}, {association: "artistas"}, {association: "albumes"}]
    // });
    // let pedidoGeneros = db.Generos.findAll();

    // Promise.all([pedidoCanciones, pedidoGeneros])
    //     .then(function([canciones, generos]){

    //     res.render("listadoCanciones", {canciones: canciones, generos: generos})
    //      })
}

module.exports = cancionesController;