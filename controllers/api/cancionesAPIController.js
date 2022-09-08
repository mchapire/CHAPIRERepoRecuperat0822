const db = require('../../database/models');
const Op = db.Sequelize.Op;

const productAPIController = {
    listar: function(req, res){

        let pedidoCanciones = db.Canciones.findAll({
            include: [{association: "generos"}, {association: "artistas"}, {association: "albumes"}]
        });
        let pedidoGeneros = db.Generos.findAll();

        Promise.all([pedidoCanciones, pedidoGeneros])
            .then(function([canciones, generos]){

            return res.status(200).json({
                totalCanciones: canciones.length,
                totalGeneros: generos.length,
                data: canciones,
                status: 200
            })
        })
    },
    editar: function(req, res){
       db.Canciones.update(req.body,{
        where: {
            id: req.params.id
        }
    })
           .then(function(cancion){
             return res.status(200).json({
               data: cancion,
               status: 200,
               editada: "La canción fue editada correctamente"
             })
       })
    },
    detalle: function(req, res){
        db.Canciones.findByPk(req.params.id)
            .then(function(cancion){
              return res.status(200).json({
                data: cancion,
                status: 200
              })
        })
    },
    crear: function(req, res){
        db.Canciones.create(req.body)
            .then(function(cancion){
              return res.status(200).json({
                data: cancion,
                status: 200,
                creada: "Si"
              })
        })
    },
    borrar: function(req, res){
        db.Canciones.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function(respuesta){
              return res.json(respuesta)
        })
    },
    buscar: function(req, res){
        db.Canciones.findAll({
            where: {
                titulo: { [Op.like]: `%` + req.query.keyword + `%`}
            }
        })
        .then(function(canciones){
            return res.status(200).json(canciones)
        })
    },
    generos: function(req, res){
        db.Generos.findAll()
        .then(function(generos){
            return res.status(200).json({
                data: generos,
                status: 200
            })
        })
    },
}

module.exports = productAPIController;