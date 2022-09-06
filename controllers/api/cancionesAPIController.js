const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Canciones = db.Canciones;
const Albumes = db.Albumes;
const Artistas = db.Artistas;
const Generos = db.Generos;

const productAPIController = {
    listar: (req, res) => {
        let promCanciones = Canciones.findAll(/*{
            include: [ 'generos', 'albumes', 'artistas'],
        }*/)
        .then((canciones) => {

            canciones.forEach((cancion) => {
                cancion.dataValues.detail = `http://localhost:3000/api/canciones/detalle/${cancion.id}`;
              });

            
            let response = {
                count: canciones.length,
                canciones: canciones,
            }
            return (
                res.json(response))
            });
    },
    
    detalle: (req, res) => {
        Canciones.findByPk(req.params.id /*,
            {
                include: [ 'generos', 'albumes', 'artistas'],
            }*/)
            .then(cancion => {
                let response = {

                    cancion: {
                        titulo: cancion.titulo,
                        duracion: cancion.duracion,
                        created_at: cancion.creacion,
                        updated_at: cancion.lanzamiento,
                        genero_id: cancion.genero,
                        album_id: cancion.idAlbum,
                        artista_id: cancion.idArtista
                    }
                }
                res.json(response);
            });
    },
}

module.exports = productAPIController;