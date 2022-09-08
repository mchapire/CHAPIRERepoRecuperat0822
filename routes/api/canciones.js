const express = require('express');
const router = express.Router();
const cancionesAPIController = require('../../controllers/api/cancionesAPIController');


router.get('/listar', cancionesAPIController.listar); //http://localhost:3000/api/listar
router.get('/buscar', cancionesAPIController.buscar); //http://localhost:3000/api/buscar?keyword=palabraABuscar
router.get('/detalle/:id', cancionesAPIController.detalle); //http://localhost:3000/api/detalle/idABuscar
router.get('/generos', cancionesAPIController.generos); //http://localhost:3000/api/generos
router.post('/crear', cancionesAPIController.crear); //http://localhost:3000/api/crear
router.delete('/borrar/:id', cancionesAPIController.borrar) //http://localhost:3000/api/borrar/idABorrar
router.put('/editar/:id', cancionesAPIController.editar); //http://localhost:3000/api/editar/idAEditar

module.exports = router;